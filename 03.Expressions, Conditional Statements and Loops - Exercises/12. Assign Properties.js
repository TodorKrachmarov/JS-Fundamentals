function solve(input) {
    let obgect = {};
    obgect[input[0]] = input[1];
    obgect[input[2]] = input[3];
    obgect[input[4]] = input[5];

    return obgect;
}

console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));