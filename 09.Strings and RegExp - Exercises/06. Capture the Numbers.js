function solve(input) {
    let text = input.join(' ');
    const regex = /[0-9]+/g;
    let arr = text.match(regex);

    console.log(arr.join(' '));
}

solve(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);