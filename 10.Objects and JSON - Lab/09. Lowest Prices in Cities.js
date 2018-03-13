function solve(arr) {
    let catalog = new Map;
    for (let i = 0; i < arr.length; i++) {
        let [city, product, price] = arr[i].split(/\s*\|\s*/);
        price = Number(price);
        if (!catalog.has(product)){
            catalog.set(product, {minPrice: price, town: city});
        } else {
            if ( price < catalog.get(product).minPrice){
                catalog.set(product, {minPrice: price, town: city});
            }
        }
    }
    for(let [product, obj] of catalog){
        console.log(`${product} -> ${obj.minPrice} (${obj.town})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1'
]);

function lowestPricesInCities(input) {
    let map = new Map();

    for(let line of input) {
        let tokens = line.split(" | ");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if(! map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for(let [product, insideMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for(let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}