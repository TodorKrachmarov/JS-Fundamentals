function solve(str) {
    let result = str.toLowerCase().split(' ');

    for (let i = 0; i < result.length; i++) {
        let word = result[i];
        let upWord = word[0].toString().toUpperCase() + word.substr(1);
        result[i] = upWord;
    }

    console.log(result.join(' '));
}

solve('Was that Easy? tRY thIs onE for SiZe!');