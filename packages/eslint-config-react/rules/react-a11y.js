module.exports = {
  extends: ['airbnb/rules/react-hooks'].map(require.resolve),
  rules: {
    // Enforce all anchors are valid, navigable elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "components": ["Link"],
        "specialLink": ["to", "hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],

    // Enforce that a label tag has a text label and an associated control.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": [
      'error',
      {
        "components": ["Label"],
        "required": {
          "some": ["nesting", "id"]
        },
        "allowChildren": false
      }
    ],
  },
};
