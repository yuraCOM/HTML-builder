const fs = require('fs');
const path = require('path');

let fileStream = fs.createReadStream(path.join(__dirname, 'text.txt'), { encoding: 'utf-8' });

fileStream.on('data', function (chunk) {
    console.log(chunk);
});


// const fs = require("fs");
 
// асинхронное чтение
// fs.readFile("01-read-file/text.txt", "utf8",
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
// });

// var fs = require('fs');
 
// //fs.ReadStream наследует от stream.Readable
// var stream = new fs.ReadStream("text.txt");
 
// stream.on('readable', function(){
//     var data = stream.read();
//     console.log(data);
//     if(data != null)console.log(data.length);
// });
 