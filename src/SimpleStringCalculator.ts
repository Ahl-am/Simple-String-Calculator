export const sumFunction = (stringToAdd: string): number => {
  // if "1,2" make it 1 + 2
  const numbers = stringToAdd.split(",");
  let sum = 0;
  
  for (const number of numbers) {
    sum += Number(number);
  }
  
  return sum;
}