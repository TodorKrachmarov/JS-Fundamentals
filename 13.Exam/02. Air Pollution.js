function solve(arrMap, arrPolution) {
    let sofiaMap = [];
    for (let i = 0; i < arrMap.length; i++) {
        sofiaMap[i] = arrMap[i].split(' ').map(Number);
    }
    for (let i = 0; i < arrPolution.length; i++) {
        let [typeOfPolution, num] = arrPolution[i].split(' ');
        num = Number(num);
        switch (typeOfPolution.toLowerCase()){
            case 'breeze':
                if (num < sofiaMap[0].length) {
                    for (let col = 0; col < sofiaMap[0].length; col++) {
                        sofiaMap[num][col] = sofiaMap[num][col] - 15 < 0 ? 0 : sofiaMap[num][col] - 15;
                    }
                }
                break;
            case 'gale':
                if (num < sofiaMap.length) {
                    for (let row = 0; row < sofiaMap.length; row++) {
                        sofiaMap[row][num] = sofiaMap[row][num] - 20 < 0 ? 0 : sofiaMap[row][num] - 20;
                    }
                }
                break;
            case 'smog':
                for (let row = 0; row < sofiaMap.length; row++) {
                    for (let col = 0; col < sofiaMap.length; col++) {
                        sofiaMap[row][col] += num;
                    }
                }
        }
    }
    let result = [];
    for (let row = 0; row < sofiaMap.length; row++) {
        for (let col = 0; col < sofiaMap.length; col++) {
            if (sofiaMap[row][col] >= 50){
                result.push(`[${row}-${col}]`);
            }
        }
    }

    if (result.length !== 0){
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}