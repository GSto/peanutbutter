module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    "transform-class-properties",
    "transform-object-rest-spread"
],
test: ["jest"]
}