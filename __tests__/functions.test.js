import { expect } from "@jest/globals";
import { sumArrayByKey } from "../functions";

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
