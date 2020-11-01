import { bubblesort } from './bubble-sort';

/**
 * Mimics a request to https://api.stackexchange.com/ to 
 * get a random bubble sorting algorithm from a question
 */
export const fetchAnswers = (): Promise<(x: number[]) => number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(bubblesort), 2000);
  });
}

/**
 * Mimics sanatization and process to check if the code coming from 
 * the request is safe or not
 */
export const isSafe = (result: (x: number[]) => number[]) => {
  return true;
}