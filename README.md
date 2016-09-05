# eslint-config-gemini-testing

Config for [ESLint](http://eslint.org/).

## Installation

```bash
$ npm install eslint-config-gemini-testing
```

## Using in a project

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
