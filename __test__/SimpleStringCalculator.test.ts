import { sumFunction } from "../src/SimpleStringCalculator";

describe("Test SimpleStringCalculator", () => {
  it("Should add empty string", () => {
    expect(sumFunction("")).toEqual(0);
  });
  // it("Should add two numbers in the string", () => {
  //   expect(sumFunction("1,2")).toEqual("3");
  // });
});
