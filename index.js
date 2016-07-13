module.exports = {
    env: {
        es6: true,
        node: true
    },
    rules: {
        'curly': 'error',
        'object-curly-spacing': ['error', 'never'],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'wrap-iife': ['error', 'any'],
        'no-multi-spaces': 'error',
        'space-before-function-paren': ['error', 'never'],
        'brace-style': ['error', '1tbs', {allowSingleLine: false}],
        'padded-blocks': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'comma-style': ['error', 'last'],
        'space-unary-ops': 'error',
        'space-infix-ops': 'error',
        'camelcase': 'error',
        'no-with': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'no-mixed-spaces-and-tabs': 'error',
        'no-trailing-spaces': 'error',
        'comma-dangle': ['error', 'never'],
        'eol-last': 'error',
        'new-cap': ['error', { capIsNew: false }],
        'consistent-this': ['error', '_this'],
        'yoda': 'error',
        'no-bitwise': 'error',
        'eqeqeq': ['error', 'always'],
        'no-extend-native': 'error',
        'no-use-before-define': ['error', {functions: false, classes: true }],
        'no-caller': 'error',
        'no-new': 'error',
        'no-undef': 'error',
    },
    'globals': {
        'describe': false,
        'before': false,
        'after': false,
        'beforeEach': false,
        'afterEach': false,
        'it': false,
        'assert': false,
        'sinon': false,
        'window': false,
        'document': false,
        'navigator': false,
        'Node': false
    },
    'overrides': {
        'test/**': {
            mocha: true
        }
    }
}
