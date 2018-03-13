function solve(arr) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    let str = `<ul>\n`;
    for (let i = 0; i < arr.length; i++) {
        str += `  <li>${arr[i].toString().htmlEscape()}</li>\n`;
    }
    str += '</ul>';

    console.log(str);
}

solve(['<b>unescaped text</b>', 'normal text']);