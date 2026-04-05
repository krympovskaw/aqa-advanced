const numbers = [10, 20, 30, 40, 50];


const totalSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 

console.log("Масив чисел:", numbers);
console.log("Сума всіх елементів:", totalSum);
