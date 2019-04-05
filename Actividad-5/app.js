//Incluyo el modulo con la clase de analisis sintactico para español.
const spanishDb = require('./modules/spanish');
var fs = require("fs");
var textByLine = fs.readFileSync('data.txt').toString().split("&");


//Creo una instancia a la clase.
let spanish = new spanishDb();

//Cargo la bd desde el archivo.
spanish.loadBdFromFile();


//Analizo una oración.
start = Date.now();
tmp=spanish.analyseTextArrayLineal(textByLine[0]);
console.log(tmp)
console.log(`Lineal:`);
millis = Date.now() - start;
console.log(`Milleseconds: ${millis}`)

var start = Date.now();
spanish.analyseTextArrayAsync(textByLine[0]);
console.log(`Asyncrono:`);
var millis = Date.now() - start;
console.log(`Milleseconds: ${millis}`)

