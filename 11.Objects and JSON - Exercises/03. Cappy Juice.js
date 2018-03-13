function solve(arr) {
    let juiceQuantity = {};
    let juiceBottles = new Map();
    for (let i = 0; i < arr.length; i++) {
        let [juice, quantity] = arr[i].split(' => ');
        quantity = Number(quantity);
        if (!juiceQuantity.hasOwnProperty(juice)){
            juiceQuantity[juice] = 0;
        }
        juiceQuantity[juice] += quantity;
        if (juiceQuantity[juice] >= 1000){
            if (!juiceBottles.has(juice)){
                juiceBottles.set(juice, 0);
            }
            let bottles = Math.floor(juiceQuantity[juice] / 1000);
            juiceBottles.set(juice, juiceBottles.get(juice) + bottles);
            juiceQuantity[juice] = juiceQuantity % 1000;
        }
    }

    [...juiceBottles].forEach(juice => console.log(`${juice[0]} => ${juice[1]}`));

}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);