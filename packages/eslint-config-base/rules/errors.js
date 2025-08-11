export default {
  rules: {
    // Disallow Use of console
    // In general, you should use a logging library which offers more flexibility in terms of log
    // level configuration and log destinations (i.e. sending logs to external storage/monitoring
    // service), such as `debug` or `bunyan`.
    // Feel free to turn this rule off in your project-level ruleset if you are ok with logging to
    // console only.
    // On frontend, custom logging logic should be implemented.
    //
    // @see  https://www.npmjs.com/package/debug

    // @see  https://www.npmjs.com/package/bunyan
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow irregular whitespace outside of strings and comments
    // except template literals - allows any whitespace characters in template literals
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
  },
};
