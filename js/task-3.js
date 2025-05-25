function filterArray(numbers, value) {
  // Створюємо порожній масив
  const filteredNumbers = [];
  // Перебираємо кожен елемент у масиві numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо поточне число більше за задане значення value
    if (numbers[i] > value) {
      // Додаємо це число до нового масиву
      filteredNumbers.push(numbers[i]);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
