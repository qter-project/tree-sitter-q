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

  rules: {
    source_file: $ => seq($._puzzle_definition_section, $._instructions),

    _puzzle_definition_section: $ => seq("Puzzles", repeat1($.puzzle_definition)),
    puzzle_definition: $ => seq(
      field("name", $._simple_ident),
      ":",
      field("type", /\w+/),
    ),

    _instructions: $ => repeat1($.instruction),
    instruction: $ => seq(
      field("index", $._number),
      "|",
      choice(
        $.algorithm,
        $.solved_goto_instruction,
        $.input_instruction,
      )
    ),

    solved_goto_instruction: $ => seq(
      "solved-goto",
      field("positions", $._positions),
      field("target", $._number),
    ),
    input_instruction: $ => seq(
      "input",
      field("message", $.string),
      field("algorithm", $.algorithm),
      "max-input",
      field("max_input", $._number),
    ),

    _positions: $ => repeat1($.position),
    position: $ => $._simple_ident,

    algorithm: $ => repeat1($.move),
    move: $ => $._simple_ident,

    _simple_ident: $ => /[^-\s{}.:$,<←()!"0-9][^-\s{}.:$,<←()!"]*/,

    _number: $ => /[0-9]+/,
    string: $ => /"([^"]|\\")*"/,
  }
});
