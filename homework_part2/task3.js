function divide(numerator, denominator) {
    
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи мають бути числами!");
    }

        if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе!");
    }

    return numerator / denominator;
}


function testDivide(a, b) {
    try {
        const result = divide(a, b);
        console.log(`Результат ділення ${a} на ${b}:`, result);
    } catch (error) {
        
        console.error("Помилка:", error.message);
    } finally {
        
        console.log("Робота завершена");
        console.log("-------------------"); 
    }
}


testDivide(10, 2);    
testDivide(10, 0);    
testDivide(10, "5");  
