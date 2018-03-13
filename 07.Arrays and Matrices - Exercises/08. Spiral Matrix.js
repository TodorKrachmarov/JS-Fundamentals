function solve(rows, cols) {
    let counter = 1;
    let result = [];

    for (let row = 0; row < rows; row++) {
        let arr = [];
        for (let col = 0; col < cols; col++) {
            arr.push(counter);
            counter++;
        }
        result[row] = arr;
    }

    for (let row = 0; row < result.length; row++) {
        console.log(result[row].join(' '));
    }
}

solve(5, 5);