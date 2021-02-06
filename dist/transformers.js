"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.slugToFile = exports.slugify = void 0;

var slugify = function slugify(post) {
  return post.replace('.md', '').replace(/\s+|_/g, '-');
};

exports.slugify = slugify;

var slugToFile = function slugToFile(slug) {
  return "".concat(slug.replace(/\s+|-/g, '_'), ".md");
};

exports.slugToFile = slugToFile;
var _default = {
  slugify: slugify,
  slugToFile: slugToFile
};
exports["default"] = _default;