function solve(arr) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/g;
    let employeeInfo = [], match;
    for (let info of arr) {
        while (match = pattern.exec(info)) {
            employeeInfo.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }

    console.log(employeeInfo.join("\n"));
}

solve(['Isacc - 1000 – CEO', 'Ivan - 500 - Employee', 'Peter - 500 – Employee']);