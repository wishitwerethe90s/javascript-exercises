const repeatString = function(text, freq) {
    let output = "";

    if(freq<0) return 'ERROR';

    for(let i = 0; i < freq; i++) {
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
