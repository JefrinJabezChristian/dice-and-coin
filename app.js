let diceValue = Math.floor(Math.random() * 6) + 1;
let coinValue = Math.floor(Math.random() * 2) + 1;

if (diceValue) {
    console.log(`The value on your dice is ${diceValue}!`)
} else {
    console.log("Uh, oh! Internal error! Try again. IF the problem persists, report the bug!");
};

if (coinValue == 1) {
    console.log("You got Heads!");
} else if (coinValue == 2) {
    console.log("You got Tails!")
} else {
    console.log("Uh, oh! Internal error! Try again. IF the problem persists, report the bug!");
};