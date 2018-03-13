function solve(text) {
    let words = text.split(/\W+/).filter(Boolean);

    console.log(words.join(", ").toUpperCase());
}

solve('hello');
