function solve(commands) {
    let counter = 0;
    let arr = [];

    for (let command of commands){
        if (command.toLowerCase() == 'add'){
            counter++;
            arr.push(counter);
        } else {
            counter++;
            arr.pop();
        }
    }

    console.log(arr.length == 0 ? 'Empty' : arr.join('\n'));
}

solve(['Add', 'add', 'add', 'add']);