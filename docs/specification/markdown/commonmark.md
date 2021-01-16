# CommonMark Spec

> A strongly defined, highly compatible specification of Markdown

相关文档

- [CommonMark](https://commonmark.org/)  
- [CommonMark Spec](https://spec.commonmark.org/)

**Why is CommonMark needed?**

In the absence of a spec, early implementers consulted the original Markdown.pl code to resolve these ambiguities. But Markdown.pl was quite buggy, and gave manifestly bad results in many cases, so it was not a satisfactory replacement for a spec. Markdown.pl was last updated December 17th, 2004.

Because there is no unambiguous spec, implementations have diverged considerably over the last 10 years. As a result, users are often surprised to find that a document that renders one way on one system (say, a GitHub wiki) renders differently on another (say, converting to docbook using Pandoc). To make matters worse, because nothing in Markdown counts as a “syntax error,” the divergence often isn’t discovered right away.

There’s no standard test suite for Markdown; MDTest is the closest thing we have. The only way to resolve Markdown ambiguities and inconsistencies is Babelmark, which compares the output of 20+ implementations of Markdown against each other to see if a consensus emerges.

We propose a standard, unambiguous syntax specification for Markdown, along with a suite of comprehensive tests to validate Markdown implementations against this specification. We believe this is necessary, even essential, for the future of Markdown.