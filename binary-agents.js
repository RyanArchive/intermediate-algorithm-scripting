/*
    Binary Agents
    
    Return an English translated sentence of the passed binary string.

    The binary string will be space separated.
*/

function binaryAgent(str) {
    const binaries = str.split(" ");
    const translated = [];

    for (let i = 0; i < binaries.length; i++) {
        translated.push(String.fromCharCode(parseInt(binaries[i], 2)));
    }

    return translated.join("");
}

binaryAgent(
    `
        01000001 01110010 01100101 01101110 00100111 01110100 00100000 
        01100010 01101111 01101110 01100110 01101001 01110010 01100101 
        01110011 00100000 01100110 01110101 01101110 00100001 00111111
    `
);