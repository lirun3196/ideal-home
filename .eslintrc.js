// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["html", "jest"],
  globals: {
    UA: true
  },
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    //'import/no-unresolved':0,
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    /// override default options for rules from base configurations
    strict: "off",
    // semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    "no-param-reassign": ["error", { props: false }],
    "prefer-const": "off", //["error", {"ignoreReadBeforeAssign": true,"destructuring": "all"}],
    "consistent-return": 0,
    "eol-last": 0

    // disable rules from base configurations
    // "no-console": "off",
    // indent: "off",
    // eqeqeq: "off",
    // "no-lonely-if": "off",
    // "no-plusplus": "off",
    // "max-len": ["error", 300],
    // "no-var": "off",
    // "no-continue": "off",
    // "no-else-return": "off",
    // "prefer-template": "off"
  }
};
