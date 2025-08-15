import globs from '@alma-oss/eslint-config-base/globs';
import graphqlPlugin from '@graphql-eslint/eslint-plugin';

export default [
  {
    files: [...globs.configs, ...globs, globs.typescripts],
    processor: graphqlPlugin.processor,
  },
  {
    files: ['*.graphql'],
    languageOptions: {
      parser: graphqlPlugin.parser,
    },
    plugins: {
      '@graphql-eslint': graphqlPlugin,
    },

    rules: {
      '@graphql-eslint/known-type-names': 'error',
    },
  },
];
