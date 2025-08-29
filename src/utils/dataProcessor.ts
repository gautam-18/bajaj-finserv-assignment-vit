import { ProcessedData } from "../types";

export function processData(data: string[]): ProcessedData {
  const oddNumbers: string[] = [];
  const evenNumbers: string[] = [];
  const alphabets: string[] = [];
  const specialCharacters: string[] = [];
  let sum = 0;

  for (const item of data) {
    if (isNumeric(item)) {
      const num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (isAlphabetic(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      specialCharacters.push(item);
    }
  }

  const concatString = createConcatString(alphabets);

  return {
    oddNumbers,
    evenNumbers,
    alphabets,
    specialCharacters,
    sum,
    concatString,
  };
}

function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

function isAlphabetic(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

function createConcatString(alphabets: string[]): string {
  const allChars: string[] = [];

  for (const alphabet of alphabets) {
    for (const char of alphabet) {
      allChars.push(char);
    }
  }

  allChars.reverse();

  let result = "";
  for (let i = 0; i < allChars.length; i++) {
    if (i % 2 === 0) {
      result += allChars[i].toUpperCase();
    } else {
      result += allChars[i].toLowerCase();
    }
  }

  return result;
}
