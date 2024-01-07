const fs = require('fs');

// read the contents of file
const readFile = (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        console.log('file contents: ');
        console.log(data);
        
        // expensive operation
        const startTime = Date.now();
        const iteration = 1000000000;
        for (let i=0; i<iteration; ++i) {

        }
        const endTime = Date.now();
        console.log(`Expensive time ${endTime - startTime} milliseconds.`);
    })
}
readFile('example.txt')