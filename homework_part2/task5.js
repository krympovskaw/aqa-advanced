const users = [
    { name: "Андрій", email: "andrew@example.com", age: 30 },
    { name: "Марія", email: "mary@gmail.com", age: 40 },
    { name: "Іван", email: "ivan@ukr.net", age: 50 }
];

console.log("Список користувачів:");

for (const { name, email, age } of users) {
    
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}