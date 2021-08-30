import { expect } from "@jest/globals";
import { arrayOfField, getNationalParks, sumArrayByKey } from "../functions";

test("given an array of uniformly shaped objects, sum the values contained at a specified key", () => {
  // arrange
  const input = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const expectedValue = 15;

  // act
  const actualValue = sumArrayByKey(input, "value");

  // assertions
  expect(actualValue).toBe(expectedValue);
});

test("convert array of objects to array of specified field values", () => {
  // arrange
  const inputs = [
    [
      { name: "Argentina", capital: "Buenos Aires" },
      { name: "Belize", capital: "Belmopan" },
      { name: "Bolivia", capital: "Sucre" },
    ],
    "name",
  ];

  const expectedValue = ["Argentina", "Belize", "Bolivia"];

  // act
  const actualValue = arrayOfField(inputs[0], inputs[1]);

  // assertions
  expect(actualValue).toEqual(expectedValue);
  expect(actualValue[0]).toBe("Argentina");
  expect(actualValue).toContain("Belize");
  expect(actualValue[2] === "Bolivia").toBeTruthy();
  expect(actualValue[3]).not.toBeDefined();
});

// arrange national parks API test
const config_nationalParksTest = {
  input: "Great Sand Dunes",
  expectedResponseKeys: ["total", "limit", "start", "data"],
  expectedQueryResultKeys: ["id", "url", "parkCode", "description"],
};

const callback_nationalParksTest = (resp, done = () => {}) => {
  const actualResponseKeys = Object.keys(resp.data);
  const actualQueryResultKeys = Object.keys(resp.data.data[0]);

  try {
    // assertions
    expect(resp).toBeDefined();
    expect(actualResponseKeys).toEqual(
      config_nationalParksTest.expectedResponseKeys
    );
    for (const key of config_nationalParksTest.expectedQueryResultKeys) {
      expect(actualQueryResultKeys).toContain(key);
    }
    done();
  } catch (e) {
    done(e);
  }
};

// use done parameter
test("search national parks with done parameter", (done) => {
  // act
  getNationalParks(config_nationalParksTest.input)
    .then((resp) => {
      callback_nationalParksTest(resp, done);
    })
    .catch((e) => done(e));
});

// return promise from test function
test("search national parks with async/await", async () => {
  // act
  try {
    const resp = await getNationalParks(config_nationalParksTest.input);
    callback_nationalParksTest(resp);
  } catch (e) {
    throw e;
  }
});

test("mock failure of national parks request", async () => {
  // assertions
  expect(() => {
    getNationalParks(config_nationalParksTest.input, true);
  }).toThrowError;
});
