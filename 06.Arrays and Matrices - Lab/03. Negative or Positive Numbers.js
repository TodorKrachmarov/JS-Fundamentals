function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0){
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
    }

    result.forEach(num => console.log(num));
}

solve([3, -2, 0, -1]);