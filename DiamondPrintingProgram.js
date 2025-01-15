function asterisks(size) {
    let asterisk = "";

    for (let i = 1; i <= size; i++) {
        for (let j = 0; j <= size - 1; j++) {
            asterisk += ' ';
        }

    }

    for (let i = 1; i <= 2 * i; i++) {
        asterisk += '*';
    }
    asterisk += '\n';

    for (let i = size - 1; i >= 1; i--) {
        for (let j = 1; j <= size; j++) {
            asterisk += '*';
        }
        asterisk += '\n';
    }
    console.log(asterisk);
}
asterisks(10);
