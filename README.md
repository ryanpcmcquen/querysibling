# querysibling
JavaScript's missing querySibling function.

Demo:
https://jsfiddle.net/ryanpcmcquen/rhg3crvp/

Given element `.zot`, which occurs after `.foo`, you could do:

```javascript
querySibling.previous('.zot', '.foo');

// => Returns `.foo` node.
```

If you were at `.foo` and wanted `.zot` (a _next_ sibling), you could do:

```javascript
querySibling.next('.foo', '.zot');

// => Returns `.zot` node.

```

---

It is available via `npm` for new-school kids (es6):

https://www.npmjs.com/package/querysibling

Or [RawGit](http://rawgit.com/) for old-school kids (es5):

https://cdn.rawgit.com/ryanpcmcquen/querysibling/923c4e5f10610b505f22b7af7ba1a54d94df8f0f/index-es5.js
