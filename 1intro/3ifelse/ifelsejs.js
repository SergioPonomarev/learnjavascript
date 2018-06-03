let company = prompt('What is the official name of JavaScript?', '');

if (company === 'ECMAScript') {
    console.log('Yes');
} else {
    console.log('NO');
}

let someNumber = +prompt('Pick a number', '');


if (someNumber > 0) {
    console.log('1')
} else if (someNumber < 0) {
    console.log('-1')
} else {
    console.log('0')
}

someNumber > 0 ? console.log('1') : someNumber < 0 ? console.log('-1') : console.log('0');


let login = prompt('Enter your login', '');

if (login == null) {
    alert('Access is canceled')
} else if (login === 'Admin') {
    let password = prompt('Enter your pass', '');
    if (password == null) {
        alert('Access is canceled')
    } else if (password === 'Black') {
        alert('Greetings')
    } else {
        alert('I do not know you')
    }
} else {
    alert('I do not know you')
}

let a = 1, b = 2;

(a + b < 4) ? console.log('Malo') : console.log('Mnogo');

let message, loggin;

loggin === 'Vasia' ? message = 'Privet':
    loggin === 'Director' ? message = 'Zdravstvuite':
        loggin === '' ? message = 'Net logina': '';