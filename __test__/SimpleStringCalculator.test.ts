import { sumFunction } from "../src/SimpleStringCalculator";

describe("Test SimpleStringCalculator", () => {
  it("Should add empty string", () => {
    expect(sumFunction("")).toEqual(0);
  });
  it("Should add one number in the string", () => {
    expect(sumFunction("1")).toEqual(1);
  });
  it("Should add two number in the string", () => {
    expect(sumFunction("1,2")).toEqual(3);
  });
});
