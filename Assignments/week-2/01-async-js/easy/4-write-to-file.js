const fs = require('fs');

const writeFile = (file, data) => {
    fs.writeFile(file, data, (err) => {
        if (err){
            console.error(err);
            return;
        }
        console.log('constent to be written');
    });
};
writeFile('write.txt', 'content to write');