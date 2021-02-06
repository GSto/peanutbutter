"use strict";

var _transformers = _interopRequireDefault(require("./transformers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var slugify = _transformers["default"].slugify,
    slugToFile = _transformers["default"].slugToFile;
describe('slugify', function () {
  test('removes the .md file extension', function () {
    var post = 'title.md';
    var result = slugify(post);
    expect(result).toEqual('title');
  });
  test('replaces underscores with dashes', function () {
    var post = 'my_post_title.md';
    var result = slugify(post);
    expect(result).toEqual('my-post-title');
  });
  test('replaces whitespace with dashes', function () {
    var post = 'my post title';
    var result = slugify(post);
    expect(result).toEqual('my-post-title');
  });
});
describe('slugToFile', function () {
  test('converts a slug to a file', function () {
    var slug = 'my-post-title';
    var result = slugToFile(slug);
    expect(result).toEqual('my_post_title.md');
  });
});