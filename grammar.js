/**
 * @file Tree-sitter parser for Q, qter's instruction format
 * @author Kian Kasad <kian@kasad.com>
 * @license GPL-3.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "qter_q",

  word: $ => $._simple_ident,

  extras: $ => [
    /\s+/,
    $.comment,
  ],

  rules: {
    source_file: $ => seq($._puzzle_definition_section, $._instructions),

    _puzzle_definition_section: $ => seq("Puzzles", repeat1($.puzzle_definition)),
    puzzle_definition: $ => seq(
      field("name", $.puzzle_name),
      ":",
      field("type", $.puzzle_type),
    ),

    _instructions: $ => repeat1($.instruction),
    instruction: $ => seq(
      field("index", $.number),
      "|",
      choice(
        $.algorithm,
        $.goto_instruction,
        $.solved_goto_instruction,
        $.solve_instruction,
        $.repeat_until_instruction,
        $.input_instruction,
        $.halt_instruction,
        $.print_instruction,
        $.switch_instruction,
      )
    ),

    goto_instruction: $ => seq("goto", field("target", $.number)),
    solved_goto_instruction: $ => seq(
      "solved-goto",
      field("positions", $.positions),
      field("target", $.number),
    ),
    solve_instruction: $ => "solve",
    repeat_until_instruction: $ => seq(
      "repeat",
      "until",
      field("positions", $.positions),
      "solved",
      field("algorithm", $.algorithm),
    ),
    input_instruction: $ => seq(
      "input",
      field("message", $.string),
      field("algorithm", $.algorithm),
      "max-input",
      field("max_input", $.number),
    ),
    halt_instruction: $ => seq(
      "halt",
      choice(
        seq(
          "until",
          field("positions", $.positions),
          "solved",
          field("message", $.string),
          field("algorithm", $.algorithm),
        ),
        field("message", $.string),
      ),
    ),
    print_instruction: $ => seq(
      "print",
      field("message", $.string),
      optional(seq(
        field("algorithm", $.algorithm),
        "counting-until",
        field("positions", $.positions)
      ))
    ),
    switch_instruction: $ => seq("switch", $.puzzle_name),

    positions: $ => repeat1($.position),
    position: $ => $._simple_ident,

    algorithm: $ => repeat1($.move),
    move: $ => $._simple_ident,

    puzzle_name: $ => $._simple_ident,
    puzzle_type: $ => $._simple_ident,

    number: $ => /[0-9]+/,
    string: $ => /"([^"]|\\")*"/,

    _simple_ident: $ => /[^-\s{}.:$,<←()!"]+/,

    comment: $ => /\([^)]*\)/,
  }
});
