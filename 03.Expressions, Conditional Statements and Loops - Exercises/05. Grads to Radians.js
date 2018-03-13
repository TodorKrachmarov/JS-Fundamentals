function solve(num) {
    let degree = num % 400;
    if (degree < 0){
        console.log(360 + degree * 0.9);
    } else {
        console.log(degree * 0.9);
    }
}

solve(100);