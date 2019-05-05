

var converter = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '  '
  }

  var alphabet = {  
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-.-.-":".",
    "--..--":",",
    "..--..":"?",
    '.----.':"'",
    "-.-.--":"!",
    "-..-.":"/",
    "-.--.":"(",
    "-.--.-":")",
    ".-...":"&",
    "---...":":",
    "-.-.-.":";",
    "-...-":"=",
    ".-.-.":"+",
    "-....-":"-",
    "..--.-":"_",
    '.-..-.':'"',
    "...-..-":"$",
    ".--.-.":"@"
 }; 
 

export function textToMorse(value){
    var mensajeM = [];
    var message = value

    message.split("").map((word) => {
        mensajeM.push(converter[word.toLowerCase()])
        mensajeM.push(" ")
    });

    return (mensajeM.join(""))
}

export function morseToText(value){
    var mensajeM1=value
    var messageConverted=[]
    mensajeM1.split("  ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ");
    });
     
    return (messageConverted.join(""))
}