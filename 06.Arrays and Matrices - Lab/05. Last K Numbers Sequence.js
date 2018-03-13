function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        var seq = result.slice(start, end);
        let sum = seq.reduce((a, b) => { return a + b}, 0);
        result[i] = sum;
    }

    console.log(result.join(' '));
}

solve(8, 2);