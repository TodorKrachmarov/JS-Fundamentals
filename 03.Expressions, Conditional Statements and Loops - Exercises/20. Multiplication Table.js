function solve(num) {
    let result = '<table border="1">\n';

    for (let row = 0; row <= num; row++) {
        result += '<tr>';
        for (let col = 0; col <= num; col++) {
            if (row == 0){
                if (col == 0){
                    result += '<th>x</th>';
                } else {
                    result += `<th>${col}</th>`;
                }
            } else {
                if (col == 0){
                    result += `<th>${row}</th>`;
                } else {
                    result += `<td>${row * col}</td>`;
                }
            }
        }
        result += '</tr>\n';
    }
    result += '</table>';

    console.log(result);
}

solve(5);