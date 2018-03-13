function solve(email) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    console.log(regex.test(email) ? 'Valid' : 'Invalid');
}

solve('invalid@emai1.bg');