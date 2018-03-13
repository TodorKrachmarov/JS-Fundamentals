function solve(sentence, word) {
    word = "\\b(" + word + ")\\b";
    let pattern = new RegExp(word, 'ig');
    let count = 0;
    let match = pattern.exec(sentence);
    while (match){
        count++;
        match = pattern.exec(sentence);
    }

    console.log(count)
}

solve('How do you plan on achieving that? How? How can you even think of that?', 'how');