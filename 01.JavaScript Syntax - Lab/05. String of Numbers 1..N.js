function numbers (num) {

    let str = '';
    for(let i = 1; i <= num; i++){
        str += i;
    }

    return str;
}

console.log(numbers('11'));