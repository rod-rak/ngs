const theOneFunc = seconds => {
    console.log(`Hello after ${seconds} seconds`)
};

const theSecondFunc = function(seconds) {
    console.log(`Hello after ${seconds} seconds`);
};

//setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, 8);

// You can define only ONE function
