(function() {
    var type_impls = Object.fromEntries([["hir_ty",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-Clone-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Idx,\n    VariantIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Idx,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; LayoutData&lt;FieldIdx, VariantIdx&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::layout::Layout"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-Debug-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: Idx,\n    VariantIdx: Idx,\n    FieldsShape&lt;FieldIdx&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Variants&lt;FieldIdx, VariantIdx&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::layout::Layout"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-Hash-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Idx,\n    VariantIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Idx,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::layout::Layout"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: Idx,\n    VariantIdx: Idx,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_aggregate\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_aggregate</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this is an aggregate type (including a ScalarPair!)</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_uninhabited\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_uninhabited</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this is an uninhabited type</p>\n</div></details><section id=\"method.scalar\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">scalar</a>&lt;C&gt;(cx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;C</a>, scalar: Scalar) -&gt; LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    C: HasDataLayout,</div></h4></section></div></details>",0,"hir_ty::layout::Layout"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: Idx,\n    VariantIdx: Idx,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_unsized\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_unsized</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the layout corresponds to an unsized type.</p>\n</div></details><section id=\"method.is_sized\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_sized</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_1zst\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_1zst</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the type is sized and a 1-ZST (meaning it has size 0 and alignment 1).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_zst\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_zst</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the type is a ZST and not unsized.</p>\n<p>Note that this does <em>not</em> imply that the type is irrelevant for layout! It can still have\nnon-trivial alignment constraints. You probably want to use <code>is_1zst</code> instead.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq_abi\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">eq_abi</a>(&amp;self, other: &amp;LayoutData&lt;FieldIdx, VariantIdx&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks if these two <code>Layout</code> are equal enough to be considered “the same for all function\ncall ABIs”. Note however that real ABIs depend on more details that are not reflected in the\n<code>Layout</code>; the <code>PassMode</code> need to be compared as well. Also note that we assume\naggregates are passed via <code>PassMode::Indirect</code> or <code>PassMode::Cast</code>; more strict\nchecks would otherwise be required.</p>\n</div></details></div></details>",0,"hir_ty::layout::Layout"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Idx,\n    VariantIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Idx,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;LayoutData&lt;FieldIdx, VariantIdx&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::layout::Layout"],["<section id=\"impl-Eq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-Eq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Idx,\n    VariantIdx: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Idx,</div></h3></section>","Eq","hir_ty::layout::Layout"],["<section id=\"impl-StructuralPartialEq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-LayoutData%3CFieldIdx,+VariantIdx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FieldIdx, VariantIdx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for LayoutData&lt;FieldIdx, VariantIdx&gt;<div class=\"where\">where\n    FieldIdx: Idx,\n    VariantIdx: Idx,</div></h3></section>","StructuralPartialEq","hir_ty::layout::Layout"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16086]}