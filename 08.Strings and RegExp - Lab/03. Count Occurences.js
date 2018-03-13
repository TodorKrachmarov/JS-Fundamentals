function solve(word, text) {
    let count = 0;
    let start = text.indexOf(word);
    while (start > -1){
        count++;
        start = text.indexOf(word, start + 1);
    }

    console.log(count);
}

solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');