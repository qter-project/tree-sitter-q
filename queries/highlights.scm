; Instruction names
[
  "goto"
  "solved-goto"
  (solve_instruction)
  "repeat"
  "input"
  "halt"
  "print"
  "switch"
] @keyword.operator

; Keywords
[
  "Puzzles"
  "until"
  "solved"
] @keyword

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
  max_input: (number) @number)

; Strings
(string) @string

; Puzzle names/types
(puzzle_name) @variable
(puzzle_type) @type.builtin
