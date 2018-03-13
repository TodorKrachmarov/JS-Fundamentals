function solve(json) {
    let table = '<table>\n';
    let arr = JSON.parse(json);
    let keys = Object.keys(arr[0]);
    table += '  <tr>';
    for (let key of keys) {
        table += `<th>${htmlEscape(key)}</th>`;
    }
    table += '</tr>\n';
    for (let info of arr){
        table += '  <tr>';
        for (let i = 0; i < keys.length; i++) {
            table += `<td>${htmlEscape(info[keys[i]])}</td>`
        }
        table += '</tr>\n';
    }
    table += '</table>';
    console.log(table);

    function htmlEscape(str) {
        return str.toString().replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}