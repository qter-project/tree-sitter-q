/**
 * @file Q, qter's instruction format
 * @author Kian Kasad <kian@kasad.com>
 * @license GPL-3.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "qter_q",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
