const number = 5; 

// Цикл for
console.log(`Таблиця множення для ${number} (цикл for):`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Цикл while
console.log(`\nТаблиця множення для ${number} (цикл while):`);
let j = 1;
while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}
