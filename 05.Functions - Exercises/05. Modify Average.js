function solve(input) {
    function getAverigeValue(number) {
        let result = 0;
        for (let i = 0; i < number.toString().length; i++) {
            let num = Number(input.toString()[i]);
            result += num;
        }
        return result;
    }
    function appendNumber(number) {
        let result = '';
        result = number.toString() + '9';
        return result;
    }

    let num = String(input);
    let avg = getAverigeValue(num);
    let lenght = num.toString().length;
    while (avg / lenght <= 5){
        num = appendNumber(num);
        avg = avg + 9;
        lenght = num.toString().length;
    }

    console.log(num);
}

solve(101);