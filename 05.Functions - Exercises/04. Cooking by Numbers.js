function solve(input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let action = input[i];

        switch (action){
            case 'chop':
                num = num / 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num = num * 3;
                break;
            case 'fillet':
                num = num - (num * 0.2);
                break;
        }

        console.log(num);
    }
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);