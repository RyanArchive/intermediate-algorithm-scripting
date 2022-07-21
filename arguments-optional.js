/*
    Arguments Optional

    Create a function that sums two arguments together. If only one 
    argument is provided, then return a function that expects one 
    argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) 
    should return a function.

    Calling this returned function with a single argument will then 
    return the sum:
        var sumTwoAnd = addTogether(2);
    
    sumTwoAnd(3) returns 5.

    If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
    const [num1, num2] = [args[0], args[1]];

    if (typeof num1 !== "number")
        return undefined;
    if (num2 === undefined)
        return (num2) => addTogether(num1, num2);
    if (typeof num2 !== "number")
        return undefined;

    return num1 + num2;
}

addTogether(2, 3);