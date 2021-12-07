const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// wrting README file
const writeFile = fileContent => {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
            rejects(err);
            return;
        }

        resolve({
            ok:true,
            message:'File created!'
        })
    })
}

module.exports={writeFile};