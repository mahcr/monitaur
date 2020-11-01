#!/usr/bin/env node
import readline from 'readline';
import { filterChars } from './input-validation';
import { fetchAnswers, isSafe } from './service';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! Please provide a list of integers. \n', async (input?: string) => {
  // check if input has at least one character
  if (!input?.length) {
    console.log('No list provided :(');
    rl.close();
    return;
  }
  
  // remove empty spaces and invalid characters from the input line 
  const { isInvalid, list } = filterChars(input);

  if (isInvalid) console.log('Invalid characters have been filtered');

  console.log('Thanks. Fetching a random bubble sort implementation. Fingers crossed.');

  const bubbleSort = await fetchAnswers();

  if (list.length && isSafe(bubbleSort)) {
    console.log(bubbleSort(list));
  } else {
    console.log(`Unfortunately, ${list.length ? 'the code is not safe to run' : 'the list doesn\'t have any valid number'} `);
  }
  
  rl.close();
});
