function solve(arrKingdom, arrBattle) {
    let kingdoms = new Map();
    let result = [];
    for (let i = 0; i < arrKingdom.length; i++) {
        let objKingdom = arrKingdom[i];
        let kingdom = objKingdom.kingdom;
        let general = objKingdom.general;
        let army = Number(objKingdom.army);
        if (!kingdoms.has(kingdom)){
            kingdoms.set(kingdom, new Map());
        }
        if (!kingdoms.get(kingdom).has(general)){
            let genObj = {army: army, wins: 0, losses: 0};
            kingdoms.get(kingdom).set(general, genObj);
        } else {
            let oldGenObj = kingdoms.get(kingdom).get(general);
            oldGenObj.army += army;
            kingdoms.get(kingdom).set(general, oldGenObj);
        }

    }

    for (let i = 0; i < arrBattle.length; i++) {
        let args = arrBattle[i];
        let atcKingdom = args[0];
        let atcGeneral = args[1];
        let defKingdom = args[2];
        let defGeneral = args[3];
        if (atcKingdom !== defKingdom){
            let atcGenObj = kingdoms.get(atcKingdom).get(atcGeneral);
            let defGenObj = kingdoms.get(defKingdom).get(defGeneral);
            let atc = atcGenObj.army;
            let def = defGenObj.army;
            if (atc > def){
                let newWinArmy = Math.floor(atcGenObj.army + (atcGenObj.army * 0.10));
                let newlostArmy = Math.floor(defGenObj.army - (defGenObj.army * 0.10));
                atcGenObj.army = newWinArmy;
                atcGenObj.wins+=1;
                defGenObj.army = newlostArmy;
                defGenObj.losses+=1;
            } else if (atcGenObj.army < defGenObj.army){
                let newWinArmy = Math.floor(defGenObj.army + (defGenObj.army * 0.10));
                let newlostArmy = Math.floor(atcGenObj.army - (atcGenObj.army * 0.10));
                atcGenObj.army = newlostArmy;
                atcGenObj.losses+=1;
                defGenObj.army = newWinArmy;
                defGenObj.wins+=1;
            }
            kingdoms.get(atcKingdom).set(atcGeneral, atcGenObj);
            kingdoms.get(defKingdom).set(defGeneral, defGenObj);
        }
    }

    for(let [kingdom, innerMap] of kingdoms){
        let kingObj = {};
        kingObj.kingdom = kingdom;
        let wins = 0;
        let losses = 0;
        for(let [gen, genStatObj] of innerMap){
            wins += genStatObj.wins;
            losses += genStatObj.losses;
        }
        kingObj.wins = wins;
        kingObj.losses = losses;
        result.push(kingObj);
    }


    result = result.sort((a,b) =>mySort(a, b));
    let winKingdom = result[0].kingdom;
    console.log(`Winner: ${winKingdom}`);
    for(let [gen, genStat] of [...kingdoms.get(winKingdom)].sort((a, b)=> b[1].army - a[1].army)){
        console.log(`/\\general: ${gen}`);
        console.log(`---army: ${genStat.army}`);
        console.log(`---wins: ${genStat.wins}`);
        console.log(`---losses: ${genStat.losses}`);
    }

    function mySort(a, b) {
        if(b.wins - a.wins !== 0){
            return b.wins - a.wins;
        } else if (a.losses - b.losses !== 0){
            return a.losses - b.losses;
        } else {
            return a.kingdom.localeCompare(b.kingdom);
        }
    }
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);