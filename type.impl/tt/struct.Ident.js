(function() {
    var type_impls = Object.fromEntries([["hir",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsName-for-Ident%3CSpan%3E\" class=\"impl\"><a href=\"#impl-AsName-for-Ident%3CSpan%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Span&gt; AsName for Ident&lt;Span&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.as_name\" class=\"method trait-impl\"><a href=\"#method.as_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_name</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir/struct.Name.html\" title=\"struct hir::Name\">Name</a></h4></section></div></details>","AsName","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Ident&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Display-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Hash-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>, span: S) -&gt; Ident&lt;S&gt;</h4></section></div></details>",0,"hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Ident&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToTokenTree-for-Ident%3CSpanData%3CSyntaxContextId%3E%3E\" class=\"impl\"><a href=\"#impl-ToTokenTree-for-Ident%3CSpanData%3CSyntaxContextId%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ToTokenTree for Ident&lt;SpanData&lt;SyntaxContextId&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.to_token\" class=\"method trait-impl\"><a href=\"#method.to_token\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_token</a>(\n    self,\n    _span: SpanData&lt;SyntaxContextId&gt;,\n) -&gt; TokenTree&lt;SpanData&lt;SyntaxContextId&gt;&gt;</h4></section></div></details>","ToTokenTree","hir::tt::Ident"],["<section id=\"impl-Eq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir::tt::Ident"],["<section id=\"impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Ident&lt;S&gt;</h3></section>","StructuralPartialEq","hir::tt::Ident"]]],["hir_def",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsName-for-Ident%3CSpan%3E\" class=\"impl\"><a href=\"#impl-AsName-for-Ident%3CSpan%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Span&gt; AsName for Ident&lt;Span&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.as_name\" class=\"method trait-impl\"><a href=\"#method.as_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_name</a>(&amp;self) -&gt; Name</h4></section></div></details>","AsName","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Ident&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Display-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Hash-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>, span: S) -&gt; Ident&lt;S&gt;</h4></section></div></details>",0,"hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Ident&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_def::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToTokenTree-for-Ident%3CSpanData%3CSyntaxContextId%3E%3E\" class=\"impl\"><a href=\"#impl-ToTokenTree-for-Ident%3CSpanData%3CSyntaxContextId%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ToTokenTree for Ident&lt;SpanData&lt;SyntaxContextId&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.to_token\" class=\"method trait-impl\"><a href=\"#method.to_token\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_token</a>(\n    self,\n    _span: SpanData&lt;SyntaxContextId&gt;,\n) -&gt; TokenTree&lt;SpanData&lt;SyntaxContextId&gt;&gt;</h4></section></div></details>","ToTokenTree","hir_def::tt::Ident"],["<section id=\"impl-Eq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_def::tt::Ident"],["<section id=\"impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Ident&lt;S&gt;</h3></section>","StructuralPartialEq","hir_def::tt::Ident"]]],["hir_expand",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsName-for-Ident%3CSpan%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/name.rs.html#236-240\">source</a><a href=\"#impl-AsName-for-Ident%3CSpan%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Span&gt; <a class=\"trait\" href=\"hir_expand/name/trait.AsName.html\" title=\"trait hir_expand::name::AsName\">AsName</a> for Ident&lt;Span&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.as_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/name.rs.html#237-239\">source</a><a href=\"#method.as_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hir_expand/name/trait.AsName.html#tymethod.as_name\" class=\"fn\">as_name</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/name/struct.Name.html\" title=\"struct hir_expand::name::Name\">Name</a></h4></section></div></details>","AsName","hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Ident&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Display-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Hash-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; Ident&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>, span: S) -&gt; Ident&lt;S&gt;</h4></section></div></details>",0,"hir_expand::tt::Ident"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Ident&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_expand::tt::Ident"],["<section id=\"impl-Eq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Ident&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_expand::tt::Ident"],["<section id=\"impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Ident%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Ident&lt;S&gt;</h3></section>","StructuralPartialEq","hir_expand::tt::Ident"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13189,13153,12872]}