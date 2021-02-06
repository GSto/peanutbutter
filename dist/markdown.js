"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMarkdown = renderMarkdown;
exports["default"] = void 0;

var _highlight2 = _interopRequireDefault(require("highlight.js"));

var _markdownIt = _interopRequireDefault(require("markdown-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var md = new _markdownIt["default"]({
  highlight: function highlight(str, lang) {
    if (lang && _highlight2["default"].getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + _highlight2["default"].highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

function renderMarkdown(content) {
  return md.render(content);
}

var _default = {
  render: renderMarkdown
};
exports["default"] = _default;