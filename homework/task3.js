function checkOrder(available, ordered) {
    if (ordered === 0) {
        
        return "Your order is empty";
    } else if (ordered > available) {
        
        return "Your order is too large, we don’t have enough goods.";
    } else {
        
        return "Your order is accepted";
    }
}

console.log(checkOrder(10, 0));  
console.log(checkOrder(10, 15)); 
console.log(checkOrder(10, 5));  
