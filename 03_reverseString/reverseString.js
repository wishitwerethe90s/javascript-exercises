const reverseString = function(text) {
    const splitText = text.split('');

    for(let i = 0; i < splitText.length/2; i++) {
        let tmp = splitText[i];
        splitText[i] = splitText[splitText.length - i - 1];
        splitText[splitText.length - i - 1] = tmp;
    }

    let output = splitText.join('');

    return output;

};

// Do not edit below this line
module.exports = reverseString;
