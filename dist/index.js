'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google_analytics = require('./google_analytics');

var _google_analytics2 = _interopRequireDefault(_google_analytics);

var _markdown = require('./markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  analytics: _google_analytics2.default,
  markdown: _markdown2.default
};