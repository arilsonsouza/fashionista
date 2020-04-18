module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "overrides": [
        {
          "files": [
            "**/__tests__/*.spec.js",           
            "**/__tests__/**.js"
          ],
          "env": {
            "jest": true
          }
        }
    ],
    "rules": {
        "no-console": "off",
        "no-eval": "error",        
        "comma-dangle": [
            "warn",
            "never"
        ],
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            2,
            "never"
        ],
        "no-unused-expressions": "warn",
        "no-useless-concat": "warn",
        "block-scoped-var": "error",
        "consistent-return": "error"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};