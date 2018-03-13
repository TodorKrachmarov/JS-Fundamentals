function solve(matrix) {
    let a = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > a){
                a = matrix[row][col];
            }
        }
    }
    console.log(a);
}

solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);