function solve(arr) {
    let miningDays = arr.map(Number);
    let days = 1;
    let bitcoinCost = 11949.16;
    let gramOfGoldCost = 67.51;
    let dayOfFirstBitcoin = 0;
    let bitcoins = 0;
    let money = 0;

    for (let i = 0; i < miningDays.length; i++) {
        let gold = miningDays[i];
        if (days % 3 === 0){
            gold = gold - (gold * 0.30);
        }
        money += gold * gramOfGoldCost;
        while (money >= bitcoinCost){
            if (bitcoins === 0){
                dayOfFirstBitcoin = days;
            }
            bitcoins++;
            money -= bitcoinCost;
        }
        days++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}