// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards() {
    let retArray= [];
    for (let i = 0; i < names.length; i++) {
       retArray.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return retArray;
}

function countDown() {
    let countDown = 10;
    while (countDown <= 10 && countDown >=0) {
        console.log(countDown);
        countDown= countDown-1;
        }
}