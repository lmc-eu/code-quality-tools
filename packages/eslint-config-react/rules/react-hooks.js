module.exports = {
  extends: ['eslint-config-airbnb/rules/react-hooks'].map(require.resolve),
  rules: {
    // Plugin enforces the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
    'react-hooks/exhaustive-deps': 'warn',
  },
};
