module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': 1,
    'jsx-a11y/anchor-has-content': [ 2, {
      'components': [ 'Anchor' ],
    }],
  },
  extends: ['airbnb'],
  plugins: [
    'babel',
  ],
}
