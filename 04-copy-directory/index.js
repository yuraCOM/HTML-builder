const fs = require("fs");
const path = require("path");

let newPath = path.join(__dirname, "files-copy");
let originPath = path.join(__dirname, "files");

// new directory
fs.mkdir(newPath, { recursive: true }, (error) => {
    if (error) {
        throw error;
    }
});

// del files in new dir
fs.readdir(newPath, (error, files) => {
    if (error) throw error;
    files.forEach( item => {
        let newFile = path.join(newPath, item);

        fs.unlink(newFile, (error) => {
            if (error) throw error;
        });
    });
});

// update files in new dir
fs.readdir(originPath, (error, files) => {
    if (error) throw error;
    files.forEach( item => {
        let file = path.join(originPath, item);
        let newFile = path.join(newPath, item);
        fs.copyFile(file, newFile, (error) => {
            if (error) throw error;
        });
    });
});