const fs = require("fs");

const path = require("path");

const dirAllCSS = path.join(__dirname, "styles");

fs.mkdir("project-dist", { recursive: true }, (err) => {
    if (err) throw err;
});

const bundleCSS = path.join(__dirname, "project-dist/bundle.css");

fs.writeFile(bundleCSS, "", (err) => {
    if (err) throw err;
});

fs.readdir(dirAllCSS, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach( (element) => {
        if (path.extname(element.name) === ".css") {
            fs.readFile(`${dirAllCSS}/${element.name}`, "utf-8", (err, data) => {
                if (err) throw err;
                else {
                    fs.appendFile(bundleCSS, data, (err) => {
                        if (err) throw err;
                    });
                }
            });
        }
    });
});