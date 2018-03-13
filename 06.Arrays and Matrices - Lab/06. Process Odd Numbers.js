function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0){
            result.unshift(arr[i] * 2);
        }
    }

    console.log(result.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);

function firstLastKElements(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2*x)
        .reverse();

    return result.join(' ');
}

console.log(firstLastKElements([3, 0, 10, 4, 7, 3]));