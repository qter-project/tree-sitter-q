; Instruction names
"switch" @keyword.operator
"solved-goto" @keyword.control.conditional
"goto" @keyword.control
[
  (solve_instruction)
  "repeat"
  "input"
  "halt"
  "print"
] @function.builtin

; Keywords
[
  "Puzzles"
  "max-input"
] @keyword.directive

[
  "until"
  "solved"
] @keyword.control.repeat

; Punctuation
(instruction "|" @punctuation.delimiter)
(puzzle_definition ":" @punctuation.delimiter)

; Line numbers
(instruction
  index: (number) @label)
(goto_instruction
  target: (number) @label)
(solved_goto_instruction
  target: (number) @label)

; Number literals
(input_instruction
  max_input: (number) @constant.numeric.integer)

; Strings
(string) @string

; Puzzle names/types
(puzzle_name) @variable
(puzzle_type) @type.builtin
