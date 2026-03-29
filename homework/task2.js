
function checkAge(age) {
   
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}


const result1 = checkAge(25);
console.log("Вік 25 років, дорослий?", result1);


const result2 = checkAge(15);
console.log("Вік 15 років, дорослий?", result2);
