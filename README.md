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
