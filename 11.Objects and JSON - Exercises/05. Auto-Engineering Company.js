function solve(arr) {
    let carCatalog = new Map();
    for (let i = 0; i < arr.length; i++) {
        let [brand, model, quantity] = arr[i].split(/\s*\|\s*/);
        quantity = Number(quantity);
        if (!carCatalog.has(brand)){
            carCatalog.set(brand, new Map());
        }
        if (!carCatalog.get(brand).has(model)){
            carCatalog.get(brand).set(model, 0);
        }
        let oldValue = carCatalog.get(brand).get(model);
        carCatalog.get(brand).set(model, oldValue + quantity);
    }

    for(let [brand, model] of carCatalog){
        console.log(brand);
        for(let [name, quantity] of model){
            console.log(`###${name} -> ${quantity}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);