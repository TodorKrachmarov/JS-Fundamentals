function solve(username, email, phone, arr) {
    let usernameReg = /<![a-zA-Z]+!>/g;
    let emailReg = /<@[a-zA-Z]+@>/g;
    let phoneReg = /<\+[a-zA-Z]+\+>/g;
    let text = arr.join('\n');
    text = text.replace(usernameReg, username);
    text = text.replace(emailReg, email);
    text = text.replace(phoneReg, phone);

    console.log(text);
}

solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);