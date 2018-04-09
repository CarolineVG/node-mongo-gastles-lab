/*console.log('Start Script!');

setTimeout(() => {
    console.log('Hello world!');
}, 1000);

console.log('Stop Script!');*/

// require fs (file reader system)
const fs = require('fs');

// sync demo
function readFileSyncDemo(path) {
    console.log('START READING FILE SYNC:');

    const data = fs.readFileSync(path, 'utf8');
    console.log(data);

    console.log('STOP READING FILE SYNC');
}

// async demo
function readFileAsyncDemo(path) {
    console.log('START READING FILE ASYNC:');

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err; // if error toon error
        console.log('DATA: ', data); // anders toon data
    });

    console.log('STOP READING FILE ASYNC');
} 

const demoPath = './hello-world.txt';
readFileSyncDemo(demoPath);
console.log('----------------------------------');
readFileAsyncDemo(demoPath);