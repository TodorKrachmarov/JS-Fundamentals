function solve(arr) {
    let table = '<table>\n';
    for(let string of arr){
        let obj = JSON.parse(string);
        table += '  <tr>\n';
        table += `    <td>${obj.name}</td>\n`;
        table += `    <td>${obj.position}</td>\n`;
        table += `    <td>${obj.salary}</td>\n`;
        table += `  <tr>\n`;
    }
    table += '</table>';

    console.log(table);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);