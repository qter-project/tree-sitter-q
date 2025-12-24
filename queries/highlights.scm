; Instruction names
"solved-goto" @keyword.conditional
[
  "goto"
  "halt"
] @keyword.return
"repeat" @keyword.repeat
[
  (solve_instruction)
  "input"
  "print"
  "switch"
] @function.builtin

; Keywords
"Puzzles" @keyword.directive
"max-input" @keyword
[
  "until"
  "solved"
] @keyword.repeat

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
