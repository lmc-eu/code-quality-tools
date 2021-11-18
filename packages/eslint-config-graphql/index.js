module.exports = {
  plugins: ['graphql'],

  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
      },
    ],
  },
};
