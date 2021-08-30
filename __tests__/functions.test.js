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

test("search national parks", (done) => {
  // arrange
  const input = "Great Sand Dunes";
  const expectedResponseKeys = ["total", "limit", "start", "data"];
  const expectedQueryResultKeys = ["id", "url", "parkCode", "description"];

  // act
  getNationalParks(input)
    .then((resp) => {
      const actualResponseKeys = Object.keys(resp.data);
      const actualQueryResultKeys = Object.keys(resp.data.data[0]);

      try {
        // assertions
        expect(resp).toBeDefined();
        expect(actualResponseKeys).toEqual(expectedResponseKeys);
        for (const key of expectedQueryResultKeys) {
          expect(actualQueryResultKeys).toContain(key);
        }
        done();
      } catch (e) {
        done(e);
      }
    })
    .catch((e) => done(e));
});
