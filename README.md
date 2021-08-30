# React Testing Techniques

[https://www.codecademy.com/courses/learn-react-testing](https://www.codecademy.com/courses/learn-react-testing)

## Jest

### Install Jest

- `npm install jest --save-dev`
  - `-g` flag if you want command line tools
- `yarn add jest`
  - `yarn global add jest` if you want command line tools
- Jest is included in with `create-react-app`

#### Init/Config

Run `jest --init` to configure project for Jest

#### [Babel](https://jestjs.io/docs/getting-started#using-babel)

`yarn add --dev babel-jest @babel/core @babel/preset-env`

### Running Tests

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

#### `test()`

`test()` function is used to create separate containers for testing logic.

`test()` takes three arguments

- a string describing what is being tested
  - state purpose of the test. do not describe implementation of function, only desired result
- a callback function containing assertions and other testing logic
- an optional timeout in milliseconds that specifies how long a test should wait before automatically aborting. default is 5000ms

#### `expect()`

[Documentation](https://jestjs.io/docs/expect)

`expect()` function asserts how we expect our program to run. used every time we write a test

`expect()` is used in conjunction with _matcher_ methods

```js
expect(2 + 2).toBe(4);
```

multiple `expect()` assertions can be made within a single call to `test()`. All assertions must pass for unit test to pass.

##### Matcher Methods

- `toBe()` - compare simple data types for equality
- `toEqual()` - deep equality comparisons (objects, arrays, etc)
- `toBeDefined()`
- `toBeTruthy()`
- `not` - used before another matcher to verify that the opposite result is true
- `toContain()` - used to verify that an item is in an array

#### Arrange, Act, Assert pattern

- Arrange: declare the input to be passed to the function being tested. also define expected output
- Act: pass input variable into the function being tested and store result in new variable
- Assert: use `expect()` assertion function and `toEqual()` matcher to compare values of expected output with actual output

#### Testing Async Code

The second argument of `test()` takes an optional function parameter `done` which, if provided, can be used to terminate the test.

Jest will wait for `done()` or timeout to complete the test.

Wrap assertions in `try/catch`. In `try`, perform `done()` after the assertion. In `catch`, perform `done(error)`.

```js
test("async test", (done) => {
  try {
    expect(actualValue).toBe(expectedValue);
    done();
  } catch (e) {
    done(e);
  }
});
```
