const car1 = {
    brand: "Jaguar",
    model: "IPACE",
    year: 2025
};

const car2 = {
    brand: "VW",
    model: "ID4",
    owner: 2024 // За умовою завдання тут число, що представляє рік випуску
};

const car3 = {
    ...car1,
    ...car2
};

console.log("Об'єкт car3:", car3);
