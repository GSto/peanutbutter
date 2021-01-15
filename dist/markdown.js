'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMarkdown = renderMarkdown;

var _highlight2 = require('highlight.js');

var _highlight3 = _interopRequireDefault(_highlight2);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md = new _markdownIt2.default({
  highlight: function highlight(str, lang) {
    if (lang && _highlight3.default.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + _highlight3.default.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

function renderMarkdown(content) {
  return md.render(content);
}

exports.default = {
  render: renderMarkdown
};