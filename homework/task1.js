// 1. 
function getAreaDeclaration(width, height) {
    return width * height;
}
console.log("Declaration:", getAreaDeclaration(5, 10));

// 2. 
const getAreaExpression = function(width, height) {
    return width * height;
};
console.log("Expression:", getAreaExpression(5, 10));

// 3. 
const getAreaArrow = (width, height) => width * height;

console.log("Arrow:", getAreaArrow(5, 10));

