/*
    Smallest Common Multiple

    Find the smallest common multiple of the provided parameters that can 
    be evenly divided by both, as well as by all sequential numbers in 
    the range between these parameters.

    The range will be an array of two numbers that will not necessarily 
    be in numerical order.

    For example, if given 1 and 3, find the smallest common multiple of 
    both 1 and 3 that is also evenly divisible by all numbers between 1 
    and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    const smallestNum = Math.min(arr[0], arr[1]);
    const largestNum = Math.max(arr[0], arr[1]);
    let commonMultiple = 1;
  
    for (let i = smallestNum; i <= largestNum; i++) {
        commonMultiple *= i;
    }
  
    for (let num = largestNum; num <= commonMultiple; num += largestNum) {
        let divisorCount = 0;
    
        for (let i = smallestNum; i <= largestNum; i++) {
            if (num % i === 0) {
                divisorCount++;
            }
        }
    
        if (divisorCount === largestNum - smallestNum + 1) {
            return num;
        }
    }
}

smallestCommons([1, 5]);