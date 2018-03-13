function solve(matrix) {
    let result = matrix[0].reduce((a, b) => { return a + b}, 0);
     function magik(matrix, result) {
         for (let i = 1; i < matrix.length; i++) {
             let sum = matrix[i].reduce((a, b) => { return a + b}, 0);

             if (sum != result){
                 return false;
             }
         }
         for (let col = 0; col < matrix[0].length; col++) {
             let sum = 0;
             for (let row = 0; row < matrix.length; row++) {
                 if(matrix[row][col] !== undefined){
                     sum += Number(matrix[row][col]);
                 }
             }

             if(sum !== result){
                 return false;
             }
         }

         return true;
     }

     console.log(magik(matrix, result));
}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);