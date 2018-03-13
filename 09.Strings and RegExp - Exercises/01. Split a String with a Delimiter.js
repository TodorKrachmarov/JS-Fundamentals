function solve(str, delimete) {
    if (delimete == '.'){
        let arr = str.split('.');

        console.log(arr.join('\n'));
    } else {
        let regex = new RegExp(delimete, 'g');
        let arr = str.split(regex);

        console.log(arr.join('\n'));
    }
}

solve('http://platform.softuni.bg', '.');