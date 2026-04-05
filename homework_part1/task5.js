// 1. Створюємо два масиви з довільними значеннями
const firstArray = [1, 2, 3];
const secondArray = ["a", "b", "c"];

const combinedArray = [...firstArray, ...secondArray];

console.log("Перший масив:", firstArray);
console.log("Другий масив:", secondArray);
console.log("Об'єднаний масив:", combinedArray);