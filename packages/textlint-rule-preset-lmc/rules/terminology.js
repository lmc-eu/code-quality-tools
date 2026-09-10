const terminologyRule = require('textlint-rule-terminology');

const defaultOptions = {
  defaultTerms: false,
  skip: ['Blockquote', 'Header', 'Link', 'Emphasis', 'Strong'],
  terms: [
    // Brands
    'Airbnb',
    'AVA',
    'Browsersync',
    'ESLint',
    'JavaScript',
    'Lodash',
    'Markdown',
    'Sass',
    'TypeScript',
    'UglifyJS',
    ['JSDocs?', 'JSDoc'],
    // Official is Node.js and we prefer it
    ['Node[ .]js', 'Node.js'],
    ['React[ .]js', 'React'],
    ['StackOverflow', 'Stack Overflow'],
    ['HTTP[ /]2(?:\\.0)?', 'HTTP/2'],
    ['OS X', 'macOS'],
    ['Mac ?OS', 'macOS'],
    ['a npm', 'an npm'],
    'npm',
    'styled-components',
    'react-router',
    'ECMAScript',
    'Amazon',
    'Facebook',
    'AWS',
    'Heroku',
    'Netlify',
    'LMC',
    'InVision',
    'Google',
    'GitHub',
    'Microsoft',

    // Words and phrases

    // http://stackoverflow.com/questions/1151338/id-or-id-on-user-interface
    'ID',
    ["id['’]?s", 'IDs'],
    ['back[- ]end(\\w*)', 'backend$1'],
    ['front[- ]end(\\w*)', 'frontend$1'],
    ['end ?to ?end', 'end-to-end'],
    ['hot[- ]key', 'hotkey'],
    ['CLI tool(s?)', 'command line tool$1'],
    ['web[- ]?site(s?)', 'site$1'],
    ['repo\\b', 'repository'],
    ['style-?guide(s?)', 'style guide$1'],
    // We want to allow writing `changelog` or `change log`
    // ['change-?log(s?)', 'change log$1'],
    ['source-?map(s?)', 'source map$1'],
    ['pre[- ]release(s?)', 'prerelease$1'],
    ['server ?side', 'server-side'],
    ['client ?side', 'client-side'],
    ['filetype(s?)', 'file type$1'],
    ['auto[- ]?complete', 'autocomplete'],
    ['auto[- ]?format', 'autoformat'],
    ['auto[- ]?fix', 'autofix'],
    ['auto[- ]?fixing', 'autofixing'],
    ['lock[- ]?file(s?)', 'lockfile$1'],
    ['name[- ]space(s?)', 'namespace$1'],
    ['tree-?shaking', 'tree shaking'],
    ['css-?in-?js', 'CSS in JS'],
    ['higher ?order', 'higher-order'],

    // Starts from a lower case letter in the middle of a sentence
    ['(\\w+[^.?!]\\)? )internet (?![Ee]xplorer)', '$1internet'],
    ['Internet Explorer', 'Internet Explorer'],
    ['(\\w+[^.?!]\\)? )stylelint', '$1Stylelint'],
    ['(\\w+[^.?!]\\)? )webpack', '$1Webpack'],
  ],
};

/**
 * Merges a consumer-supplied options object (typically just `{ exclude: [...] }`) with the
 * preset's own defaults, instead of letting it replace them wholesale.
 *
 * @param {object|boolean} [options] consumer-supplied rule options (`true`, as textlint passes
 *   when a rule is enabled with no options, is a no-op here since `defaultOptions` still spreads)
 * @returns {object} merged options
 */
function mergeOptions(options = {}) {
  return { ...defaultOptions, ...options };
}

/**
 * @param {object} context textlint rule context
 * @param {object|boolean} [options] consumer-supplied rule options (`true`, as textlint passes
 *   when a rule is enabled with no options, is a no-op here since `defaultOptions` still spreads)
 * @returns {object} textlint rule reporter
 */
function terminologyLinter(context, options) {
  return terminologyRule.linter(context, mergeOptions(options));
}

/**
 * @param {object} context textlint rule context
 * @param {object|boolean} [options] consumer-supplied rule options (`true`, as textlint passes
 *   when a rule is enabled with no options, is a no-op here since `defaultOptions` still spreads)
 * @returns {object} textlint rule reporter
 */
function terminologyFixer(context, options) {
  return terminologyRule.fixer(context, mergeOptions(options));
}

module.exports = {
  linter: terminologyLinter,
  fixer: terminologyFixer,
};
