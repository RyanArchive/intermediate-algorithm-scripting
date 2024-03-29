/*
    Spinal Tap Case

    Convert a string to spinal case. Spinal case is 
    all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str.replace(/\s|_|([a-z]|\s)([A-Z])/g, "$1-$2").toLowerCase();
}

spinalCase('This Is Spinal Tap');