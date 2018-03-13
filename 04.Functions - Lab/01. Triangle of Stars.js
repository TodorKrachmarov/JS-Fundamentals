function solve(size) {
    for (let i = 1; i <= size; i++) {
        print(i);
    }
    for (let i = size - 1; i >= 1; i--) {
        print(i);
    }
    function print(n) {
        console.log('*'.repeat(n));
    }
}

solve(5);