function binNumbers(input) {
    for(let num of input){
        console.log(Math.log2(num));
    }
}

binNumbers([1024, 1048576, 256, 1, 2]);