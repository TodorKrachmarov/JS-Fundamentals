function solve(arr) {
    let catalog = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(' : ');
        let product = {name: args[0], price: Number(args[1])};
        catalog.push(product);
    }
    catalog.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    let letter = '9';
    for (let i = 0; i < catalog.length; i++) {
        if (letter !== catalog[i].name.substr(0,1)){
            letter = catalog[i].name.substr(0,1);
            console.log(letter);
        }
        console.log(`  ${catalog[i].name}: ${catalog[i].price}`);
    }
}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);