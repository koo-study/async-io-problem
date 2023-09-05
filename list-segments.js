'use strict';
const fs = require('node:fs');

function ls(path) {
    const promise = fs.promises.readdir(path, 'utf8');
    promise.then(files => {
        for (const file of files) {
            console.log(file)
        }
    });
}

async function ls2(path) {
    const files = await fs.promises.readdir(path, 'utf8');
    for (const file of files) {
        console.log(file);
    }
}

ls('.');
ls2('.');