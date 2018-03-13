function solve(str) {
    let result = [];

    while (true){
        let start = str.indexOf('(');
        let end = str.indexOf(')');
        if (start < 0 || end < 0 || end < start){
            break;
        }

        result.push(str.substring(start + 1, end));
        str = str.substr(end +1);
    }

    console.log(result.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');