// Taken from https://codepen.io/tabrindle/pen/BjGOod
export const bubblesort = (items: number[]) => {
  const length = items.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < (length - i - 1); j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
      }
    }
  }
  return items;
};