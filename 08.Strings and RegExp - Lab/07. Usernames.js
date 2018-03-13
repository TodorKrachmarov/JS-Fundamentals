function solve(arr) {
    let usernames = [];
    for (let i = 0; i < arr.length; i++) {
        let tolkens = arr[i].split('@');
        let name = tolkens[0] + '.';
        let initials = tolkens[1].split('.');
        for (let j = 0; j < initials.length; j++) {
            let str = initials[j];
            name += str[0];
        }
        usernames.push(name);
    }

    console.log(usernames.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);