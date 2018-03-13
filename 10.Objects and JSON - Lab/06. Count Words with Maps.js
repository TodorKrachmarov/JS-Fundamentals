function solve(str) {
    let words = new Map;
    let arr = str[0].split(/\W+/).filter(a => a !== '');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();
        words.has(word) ? words.set(word, words.get(word) + 1) : words.set(word, 1);
    }

    for(let [w, n] of [...words].sort()){
        console.log(`'${w}' -> ${n} times`);
    }
}

solve(['Far too slow, you\'re far too slow.']);