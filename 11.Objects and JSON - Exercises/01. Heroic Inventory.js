function solve(arr) {
    let heroCatalog = [];
    for (let i = 0; i < arr.length; i++) {
        let tolkens = arr[i].split(' / ');
        let heroName = tolkens[0];
        let heroLevel = Number(tolkens[1]);
        let heroItems = [];
        if (tolkens.length === 3){
            heroItems = tolkens[2].split(', ');
        }
        let hero ={name:heroName, level: heroLevel, items: heroItems};
        heroCatalog.push(hero);
    }

    console.log(JSON.stringify(heroCatalog));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',]);