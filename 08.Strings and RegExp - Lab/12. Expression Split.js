function solve(str) {
    let arr = str.split(/[\s.();,]+/);
    console.log(arr.join('\n'));
}

solve('let sum = 4 * 4,b = "wow";');