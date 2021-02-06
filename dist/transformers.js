'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var slugify = exports.slugify = function slugify(post) {
  return post.replace('.md', '').replace(/\s+|_/g, '-');
};

var slugToFile = exports.slugToFile = function slugToFile(slug) {
  return slug.replace(/\s+|-/g, '_') + '.md';
};

exports.default = {
  slugify: slugify,
  slugToFile: slugToFile
};