(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/dsconfig"],{

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/, end: /"/
  };
  var APOS_PROPERTY = {
    className: 'string',
    begin: /'/, end: /'/
  };
  var UNQUOTED_PROPERTY = {
    className: 'string',
    begin: '[\\w-?]+:\\w+', end: '\\W',
    relevance: 0
  };
  var VALUELESS_PROPERTY = {
    className: 'string',
    begin: '\\w+-?\\w+', end: '\\W',
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [
      {
        className: 'keyword',
        begin: '^dsconfig', end: '\\s', excludeEnd: true,
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '(list|create|get|set|delete)-(\\w+)', end: '\\s', excludeEnd: true,
        illegal: '!@#$%^&*()',
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '--(\\w+)', end: '\\s', excludeEnd: true
      },
      QUOTED_PROPERTY,
      APOS_PROPERTY,
      UNQUOTED_PROPERTY,
      VALUELESS_PROPERTY,
      hljs.HASH_COMMENT_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=dsconfig.js.map?v=8eef4c281767b46a1116