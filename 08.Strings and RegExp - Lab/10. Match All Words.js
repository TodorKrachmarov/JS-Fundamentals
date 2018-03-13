function solve(text) {
    let regex = /\w+/g;
    let arr = text.match(regex);
    console.log(arr.join('|'));
}

solve('_(Underscores) are also word characters');