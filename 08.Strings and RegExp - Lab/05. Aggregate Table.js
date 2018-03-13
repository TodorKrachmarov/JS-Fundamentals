function solve(table) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
        let arr = table[i].split('|');
        sum += Number(arr.pop());
        result.push(arr[1].trim());
    }

    console.log(result.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);