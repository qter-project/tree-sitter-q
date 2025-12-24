package tree_sitter_qter_q_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_qter_q "github.com/qter-project/tree-sitter-q/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_qter_q.Language())
	if language == nil {
		t.Errorf("Error loading Q (qter) grammar")
	}
}
