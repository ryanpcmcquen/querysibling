/*! querySibling.js v1.1.2--ES5 by ryanpcmcquen */
/*jshint expr:true*/
(function () {
  'use strict';
  var _qs = function (e, s, t) {
    (typeof e === 'string') && (e = document.querySelector(e));
    var sa = Array.prototype.slice.call(
      e.parentNode.querySelectorAll(s)
    );
    var ps = function (sib) {
      return sib[t + 'ElementSibling'];
    };
    return sa.filter(function (i) {
      return (ps(e) === i) ? i : ps(ps(i));
    }).pop();
  };

  window.querySibling = {
    previous: function (e, s) {
      return _qs(e, s, 'previous');
    },
    next: function (e, s) {
      return _qs(e, s, 'next');
    }
  };
}());
