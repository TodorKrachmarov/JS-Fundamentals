function solve(arr) {
    let sentence = arr[0].split(' ').filter(a => a !== '');
    let result = '';
    result += sentence[0];
    let separators = '.,!?:;';

    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i].endsWith('"')){
            sentence[i] = sentence[i].substr(0, sentence[i].length -2) + ' ' + '"'
        } else if (separators.includes(sentence[i]) || sentence[i - 1] === '"'){
            result += sentence[i];
        } else if (!Number.isNaN(sentence[i]) && (sentence[i-1] === '.' || sentence[i-1].endsWith('.'))){
            result += sentence[i];
        } else {
            result += (' ' + sentence[i]);
        }
    }

    console.log(result);
}

function solve1([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}

solve('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also\n' +
    'this date is pretty confusing : 20 . 12. 16 .');