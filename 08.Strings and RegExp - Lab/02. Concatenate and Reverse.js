function solve(str) {
    let arr = str.join('');
    let char = Array.from(arr);
    let reversed = char.reverse();

    console.log(reversed.join(''));
}

solve(['I', 'am', 'student']);