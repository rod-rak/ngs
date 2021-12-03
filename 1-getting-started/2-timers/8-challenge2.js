// Print "Hello World"
// Every second
// And stop after 5 times

let counter = 0;
const intervalId = setInterval(() => {
    console.log("Hello world");
    counter++;

    if (counter == 5) {
        clearInterval(intervalId);
        console.log("Done");
    }
    
}, 1000);


// After 5 times. Print "Done" and let Node exit.
