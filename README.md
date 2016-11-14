# eslint-config-gemini-testing

Config for [ESLint](http://eslint.org/).

## Installation

```bash
$ npm install eslint-config-gemini-testing --save-dev
```

## Using in a project

### Dependencies

Add the following dependencies into `devDependencies` of your project:

* 3.x <= eslint < 4.x
* 4.x <= eslint-plugin-mocha < 5.x

### Configuration

* Add file `.eslintrc.js` to the root of your project:

```js
module.exports = {
    extends: 'gemini-testing',
    root: true
};
```

* Add file `.eslintrc.js` to the test folder:

```js
module.exports = {
    extends: 'gemini-testing/tests'
};
```

* Add file `.eslintrc.js` to the folder with client js:

```js
module.exports = {
    extends: 'gemini-testing/browser'
};
```
