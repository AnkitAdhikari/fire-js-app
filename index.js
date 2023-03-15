// IMPORTING USING ESM
// import * as fs from "node:fs";

// IMPORTING USING CJS
const fs = require("node:fs");

const folderName = `./${process.argv[2]}`;

// making your working directory

fs.mkdir(folderName, { recursive: true }, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Sucessfully crated your app");
  }
});

// creating html file

const DATA_HTML =
  '<!DOCTYPE html>\n<html lang="en">\n\t\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<title>Document</title>\n\t\t<!-- styles -->\n\t\t<link rel="stylesheet" href="style.css">\n\t</head>\n\t<body>\n\t\t<h1>Js App created</h1>\n\n\n\n\t\t<script src="app.js"></script>\n\t</body>\n</html>';

fs.writeFile(`${folderName}/index.html`, DATA_HTML, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// creating css file

const DATA_CSS = "*{\n\tmargin:0;\n\tpadding:0;\n\tbox-sizing: border-box;\n}";

fs.writeFile(`${folderName}/style.css`, DATA_CSS, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// creating js file

const DATA_JS = "'use strict';\n";

fs.writeFile(`${folderName}/app.js`, DATA_JS, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
