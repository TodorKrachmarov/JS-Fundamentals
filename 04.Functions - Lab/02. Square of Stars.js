function solve(size) {
    for (let i = 1; i <= size; i++) {
        print(size);
    }
    function print(n) {
        console.log('* '.repeat(n).trim());
    }
}

solve(5);