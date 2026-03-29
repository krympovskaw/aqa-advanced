// 1.
function handleEven() {
    console.log("number is even");
}

// 2. 
function handleOdd() {
    console.log("number is odd");
}

// 3. 
function handleNum(number, evenCallback, oddCallback) {
    
    if (number % 2 === 0) {
        evenCallback(); 
    } else {
        oddCallback();  
    }
}

// 4.
handleNum(10, handleEven, handleOdd); 
handleNum(7, handleEven, handleOdd);  
