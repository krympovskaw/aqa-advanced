const person = {
    firstName: "Марія",
    lastName: "Косач",
    age: 45
};

// 2. Додаємо нову властивість email
person.email = "mary1995@gmail.com";

delete person.age;

console.log("Оновлений об'єкт person:", person);