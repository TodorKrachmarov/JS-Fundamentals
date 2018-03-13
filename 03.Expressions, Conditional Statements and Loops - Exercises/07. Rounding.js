function solve(input) {
    let round = input[1];
    if (round > 15){
        round = 15;
    }
    num = input[0].toFixed(round)
    console.log(Number(num));
}

solve([10.5, 3]);