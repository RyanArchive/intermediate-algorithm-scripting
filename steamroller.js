/*
    Steamroller

    Flatten a nested array. You must account for varying levels of 
    nesting.
*/

function steamrollArray(arr) {
    const flattenArr = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArr.push(...steamrollArray(arr[i]));
        } else {
            flattenArr.push(arr[i]);
        }
    }
  
    return flattenArr;
}

steamrollArray([1, [2], [3, [[4]]]]);