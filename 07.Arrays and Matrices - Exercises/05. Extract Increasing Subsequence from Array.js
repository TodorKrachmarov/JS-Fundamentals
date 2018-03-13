function solve(arr) {
    let result = [];
    let minNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= minNumber){
            minNumber = Number(arr[i]);
            result.push(arr[i]);
        }
    }

    console.log(result.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);