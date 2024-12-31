(function() {
    var type_impls = Object.fromEntries([["hir_def",[]],["hir_expand",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CInFileWrapper%3CEditionedFileId,+T%3E%3E-for-InFileWrapper%3CHirFileId,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#131-135\">source</a><a href=\"#impl-From%3CInFileWrapper%3CEditionedFileId,+T%3E%3E-for-InFileWrapper%3CHirFileId,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;EditionedFileId, T&gt;&gt; for <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#132-134\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"type\" href=\"hir_expand/files/type.InRealFile.html\" title=\"type hir_expand::files::InRealFile\">InRealFile</a>&lt;T&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<InFileWrapper<EditionedFileId, T>>","hir_expand::files::AstId","hir_expand::files::ErasedAstId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CInFileWrapper%3CMacroFileId,+T%3E%3E-for-InFileWrapper%3CHirFileId,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#125-129\">source</a><a href=\"#impl-From%3CInFileWrapper%3CMacroFileId,+T%3E%3E-for-InFileWrapper%3CHirFileId,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;<a class=\"struct\" href=\"hir_expand/struct.MacroFileId.html\" title=\"struct hir_expand::MacroFileId\">MacroFileId</a>, T&gt;&gt; for <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#126-128\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"type\" href=\"hir_expand/files/type.InMacroFile.html\" title=\"type hir_expand::files::InMacroFile\">InMacroFile</a>&lt;T&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<InFileWrapper<MacroFileId, T>>","hir_expand::files::AstId","hir_expand::files::ErasedAstId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CHirFileId,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#445-470\">source</a><a href=\"#impl-InFileWrapper%3CHirFileId,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: AstNode&gt; <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.original_ast_node_rooted\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#446-469\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.original_ast_node_rooted\" class=\"fn\">original_ast_node_rooted</a>(\n    self,\n    db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"hir_expand/files/type.InRealFile.html\" title=\"type hir_expand::files::InRealFile\">InRealFile</a>&lt;N&gt;&gt;</h4></section></div></details>",0,"hir_expand::files::AstId","hir_expand::files::ErasedAstId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CHirFileId,+SN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#210-299\">source</a><a href=\"#impl-InFileWrapper%3CHirFileId,+SN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SN: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;SyntaxNode&gt;&gt; <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;SN&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.parent_ancestors_with_macros\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#211-226\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.parent_ancestors_with_macros\" class=\"fn\">parent_ancestors_with_macros</a>(\n    self,\n    db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;SyntaxNode&gt;&gt; + '_</h4></section><section id=\"method.ancestors_with_macros\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#228-243\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.ancestors_with_macros\" class=\"fn\">ancestors_with_macros</a>(\n    self,\n    db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;SyntaxNode&gt;&gt; + '_</h4></section><section id=\"method.kind\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#245-247\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; SyntaxKind</h4></section><section id=\"method.text_range\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#249-251\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.text_range\" class=\"fn\">text_range</a>(&amp;self) -&gt; TextRange</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.original_file_range_rooted\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#257-259\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.original_file_range_rooted\" class=\"fn\">original_file_range_rooted</a>(self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; <a class=\"type\" href=\"hir_expand/files/type.FileRange.html\" title=\"type hir_expand::files::FileRange\">FileRange</a></h4></section></summary><div class=\"docblock\"><p>Falls back to the macro call range if the node cannot be mapped up fully.</p>\n<p>For attributes and derives, this will point back to the attribute only.\nFor the entire item use [<code>InFile::original_file_range_full</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.original_file_range_with_macro_call_body\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#262-267\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.original_file_range_with_macro_call_body\" class=\"fn\">original_file_range_with_macro_call_body</a>(\n    self,\n    db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>,\n) -&gt; <a class=\"type\" href=\"hir_expand/files/type.FileRange.html\" title=\"type hir_expand::files::FileRange\">FileRange</a></h4></section></summary><div class=\"docblock\"><p>Falls back to the macro call range if the node cannot be mapped up fully.</p>\n</div></details><section id=\"method.original_syntax_node_rooted\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#269-298\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.original_syntax_node_rooted\" class=\"fn\">original_syntax_node_rooted</a>(\n    self,\n    db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"hir_expand/files/type.InRealFile.html\" title=\"type hir_expand::files::InRealFile\">InRealFile</a>&lt;SyntaxNode&gt;&gt;</h4></section></div></details>",0,"hir_expand::files::AstId","hir_expand::files::ErasedAstId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CHirFileId,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#472-479\">source</a><a href=\"#impl-InFileWrapper%3CHirFileId,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into_real_file\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#473-478\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/type.InFile.html#tymethod.into_real_file\" class=\"fn\">into_real_file</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"type\" href=\"hir_expand/files/type.InRealFile.html\" title=\"type hir_expand::files::InRealFile\">InRealFile</a>&lt;T&gt;, <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;T&gt;&gt;</h4></section></div></details>",0,"hir_expand::files::AstId","hir_expand::files::ErasedAstId"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14,11634]}