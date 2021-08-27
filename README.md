# React Testing Techniques

[https://www.codecademy.com/courses/learn-react-testing](https://www.codecademy.com/courses/learn-react-testing)

## Jest

Install Jest

- `npm install jest --save-dev`
  `-g` flag if you want command line tools
- Jest is included in with `create-react-app`

The Jest API looks for files that are either inside of a `__tests__/` directory or any file that ends in either `.test.js` or `.specs.js`.

Match the name of the test file to the file that you are wanting to test.

- `math.js` --> `math.test.js`

Terminal command to run test files individually: `jest <filepath/filename>`

Run all tests in `__tests__/` folder by running command `jest`

### Command Line Flags

`--coverage` - Report of code coverage

- _statement_ coverage
- _branch_ coverage
- _function_ coverage
- _line_ coverage

Custom script in `package.json` that always runs jest with `--coverage` flag

```json
"scripts": {
  // other scripts...
  "test": "jest __tests__/ --coverage"
}
```

### Unit Testing

When unit testing, each function should be tested in isolation.
