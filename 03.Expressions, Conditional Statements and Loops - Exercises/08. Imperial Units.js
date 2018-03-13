function solve(num) {
    let feet = Math.floor(num / 12).toFixed(0);
    let inches = num % 12;

    console.log(`${feet}'-${inches}"`);
}

solve(55);