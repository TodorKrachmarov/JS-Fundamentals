function solve(arr) {
    let catalog = new Map;
    for (let i = 0; i < arr.length; i++) {
        let [town, product, sales] = arr[i].split(/\s*->\s*/);
        sales = sales.split(/\s*:\s*/).map(Number).reduce((a, b) => a * b);
        if (!catalog.has(town)){
            catalog.set(town, new Map);
        }
        if (!catalog.get(town).has(product)){
            catalog.get(town).set(product, 0);
        }
        let oldValue = catalog.get(town).get(product);
        catalog.get(town).set(product, oldValue + sales);
    }
    for (let [town, sales] of catalog){
        console.log(`Town - ${town}`);
        for (let [product, sale] of sales){
            console.log(`$$$${product} : ${sale}`);
        }
    }
}

solve([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);