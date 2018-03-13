function solve(str, arr) {
    for (let word of arr){
        let replased = '-'.repeat(word.length);
        while (str.indexOf(word) > -1){
            str = str.replace(word, replased);
        }
    }

    console.log(str);
}

solve('roses are red, violets are blue', [', violets are', 'red']);