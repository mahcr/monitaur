/**
 * Removes empty spaces and split the string into an array
 * @param input Input line coming from the console
 */
const sanatize = (input: string) => {
  return input
    .replace(/\s/g, '') // remove empty spaces
    .split(',');  // separate numbers by comma
}

const isCharValid = (char: string ) =>  !(char === '' || isNaN(+char));

/**
 * Checks if the list has invalid chars and remove them 
 * @param input 
 */
export const filterChars = (input: string) => {
  let hasInvalidChars = false;   
  
  const sanatizedInput = sanatize(input);
  
  const filterInvalidChars = (acc: number[], num: string) => {

    const isValid = isCharValid(num);
  
    if (isValid) return [ ...acc, +num ];        
  
    hasInvalidChars = true; 
    
    return acc;
  }
  
  // filter invalid characters and update hasInvalidChars
  const numberList = sanatizedInput.reduce<number[]>(filterInvalidChars, []);

  return {
    original: input,
    list: numberList,
    isInvalid: hasInvalidChars
  }
}

