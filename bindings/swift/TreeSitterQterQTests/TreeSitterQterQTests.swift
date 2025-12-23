import XCTest
import SwiftTreeSitter
import TreeSitterQterQ

final class TreeSitterQterQTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_qter_q())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Q (qter) grammar")
    }
}
