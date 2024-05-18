import { sumFunction } from "../src/SimpleStringCalculator";

describe("Test SimpleStringCalculator", () => {
  it("Should add empty string", () => {
    expect(sumFunction("")).toEqual(0);
  });
  it("Should add one number in the string", () => {
    expect(sumFunction("1")).toEqual(1);
  });
  it("Should add two numbers in the string", () => {
    expect(sumFunction("1,2")).toEqual(3);
  });
  it("Should add three numbers. The third is after a separator", () => {
    expect(sumFunction("1,2\n3")).toEqual(6);
  });
  it("Should throw an exception if last char is a separator", () => {
    expect(() => sumFunction("1,2\n3,")).toThrow();
  });
  it("Should add a number with custom separator", () => {
    expect(sumFunction("//;7")).toEqual(7);
  });

  it("Should add two numbers with custom separator", () => {
    expect(sumFunction("//;4\n7")).toEqual(11);
  });
  it("Should add three numbers with custom separator", () => {
    expect(sumFunction("//;4\n7;8")).toEqual(19);
  });
  it("Should throw an exception if last char is a custom separator", () => {
    expect(() => sumFunction("//;1,2\n3;")).toThrow();
  });
});
