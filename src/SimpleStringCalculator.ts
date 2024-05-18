export const sumFunction = (stringToAdd: string): number => {
  let customSeparator;
  if (isStringHasCustomSeparator(stringToAdd)) {
    customSeparator = extractCustomSeparator(stringToAdd);
  }
  const updatedString = removeLeadingSlashes(stringToAdd);
  validateSeparator(updatedString, customSeparator);
  const numbers = extractNumbers(updatedString, customSeparator);
  return calculateSum(numbers);
};

const extractNumbers = (
  stringToAdd: string,
  customSeparator?: string
): number[] => {
  const regexPattern = getSeparatorRegexExpression(customSeparator);
  return stringToAdd.split(regexPattern).map(Number);
};

const validateSeparator = (
  stringToAdd: string,
  customSeparator?: string
): void => {
  const lastChar = stringToAdd[stringToAdd.length - 1];
  const regexPattern = getSeparatorRegexExpression(customSeparator);
  const isLastCharSeparator = regexPattern.test(lastChar);
  if (isLastCharSeparator) {
    throw new Error("Invalid argument: Contains separator at the end");
  }
};

const extractCustomSeparator = (stringToAdd: string): string | undefined => {
  const regex = /\/\/([^0-9\n,]*)/;
  const match = stringToAdd.match(regex);
  return match && match.length > 0 ? match[1] : undefined;
};

const isStringHasCustomSeparator = (stringToAdd: string): boolean => {
  return stringToAdd.startsWith("//");
};

const removeLeadingSlashes = (str: string): string => {
  return str.replace(/^\/\//, "");
};

const calculateSum = (numbers: number[]): number => {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const getSeparatorRegexExpression = (customSeparator?: string): RegExp => {
  return customSeparator ? new RegExp(`,|\\n|${customSeparator}`, "g") : new RegExp(',|\n', "g");
};
