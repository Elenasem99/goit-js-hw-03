function slugify(title) {
  // Робимо весь рядок маленькими літерами
  const lowerTitle = title.toLowerCase();

  // Розбиваємо рядок на масив слів, розділяючи по пробілу
  const words = lowerTitle.split(" ");

  // З'єднуємо слова через тире
  const slug = words.join("-");

  return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
