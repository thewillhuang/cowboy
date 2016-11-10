module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': 1,
  },
  plugins: [
    'babel',
  ],
}
