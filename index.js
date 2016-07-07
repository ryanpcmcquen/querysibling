/*! querySibling 1.1.0 by ryanpcmcquen */
/*global modules*/
/*jshint esversion:6*/
const qu = 'querySelector';
const querySibling = {
  _qs: (e, s, t) => {
    (t === 'p') ? (t = 'previous') : (t = 'next');
    (typeof e === 'string') && (e = document[qu](e));
    const sa = (e.parentNode[qu + 'All'](s));
    const ps = (s) => s[t + 'ElementSibling'];
    return [...sa].filter((i) => (ps(e) === i) ? i : ps(ps(i))).pop();
  },
  previous: (e, s) => querySibling._qs(e, s, 'p'),
  next: (e, s) => querySibling._qs(e, s, 'n')
};

modules.export = querySibling;
