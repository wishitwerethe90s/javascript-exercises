const sumAll = function(arg1, arg2) {
    if((typeof arg1) !== 'number' || (typeof arg2) !== 'number') {
        return 'ERROR';
    }
    
    if(arg1<0 || arg2<0) {
        return 'ERROR';
    }

    let lower, upper;
    if(arg1 < arg2) {
        lower = arg1;
        upper = arg2;
    }
    else {
        lower = arg2;
        upper = arg1;
    }

    let sum = 0;
    for(let i = lower; i <= upper; i++) {
        sum+=i;
    }
    
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
