function solve(str) {
    let words = {};
    let arr = str[0].split(/\W+/).filter(a => a !== '');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (!words.hasOwnProperty(word)){
            words[word] = 0;
        }
        words[word] += 1;
    }
    console.log(JSON.stringify(words));
}

solve('JS devs use Node.js for server-side JS.-- JS for devs');