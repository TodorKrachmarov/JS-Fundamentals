function colorNumbers(num) {
    let result = '<ul>\n';
    for (let i = 1; i <= num; i++){
        let color = 'blue';
        if (i % 2 != 0){
            color = 'green';
        }

        result += ` <li><span style='color:${color}'>${i}</span></li>\n`;;
    }

    result += '</ul>';

    return result;
}

console.log(colorNumbers(10));