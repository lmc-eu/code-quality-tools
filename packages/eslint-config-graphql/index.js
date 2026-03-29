import globs from '@alma-oss/eslint-config-base/globs';
// eslint-disable-next-line import/no-unresolved
import graphqlPlugin from '@graphql-eslint/eslint-plugin';

export default [
  {
    name: '@alma-oss/eslint-config-graphql',
    files: [...globs.configs, ...globs.javascripts, ...globs.typescripts],
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
      /**
       * Enforce that all GraphQL types referenced in your schema or queries are actually defined.
       *
       * @see { @link https://the-guild.dev/graphql/eslint/rules/known-type-names }
       */
      '@graphql-eslint/known-type-names': 'error',
    },
  },
];
