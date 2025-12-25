; Instruction names
"solved-goto" @keyword.control.conditional
[
  "goto"
  "halt"
] @keyword.control
[
  (solve_instruction)
  "input"
  "print"
  "repeat"
] @function.builtin
"switch" @keyword.operator

; Keywords
"Puzzles" @keyword.directive
"max-input" @keyword
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

; Comments
(comment) @comment.block
