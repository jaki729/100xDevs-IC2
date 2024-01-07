const fs = require('fs');
const path = './example.txt'
fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const trimData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile(path,trimData,'utf-8',(err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('file is updated!');    
    });
});