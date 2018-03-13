function solve(str) {
    let regex = /\b_([A-Za-z0-9]+)\b/g;
    let result = str.match(regex).map(match => match.substr(1));
    console.log(result.join(','));
}

solve('The _id and _age variables are both integers.');
