module.exports = {
    plugins: [
        'mocha'
    ],

    env: {
        mocha: true
    },

    rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-identical-title': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-sibling-hooks': 'error'
    },

    globals: {
        assert: false,
        sinon: false
    }
};
