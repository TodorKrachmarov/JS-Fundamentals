function solve(word) {
    let wordReversed = word.split("").reverse().join("");
    console.log(word === wordReversed);
}

solve('haha');