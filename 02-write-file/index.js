
const fs = require('fs');
const path = require('path');
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.open(
    path.resolve(__dirname, 'text.txt'), 'w',
    console.log('Enter text'),
    (err) => {
        if (err) throw err;
    }
);

const text = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

readLine.on('line', (date) => {

    if (date == 'exit') {
        process.exit();
    }
    text.write(date + '\n');
});

process.on('exit', () => {
    console.log('Exit. Bye!');
});







// let fs = require("fs");
// const readline = require('readline');
// const {stdin: input, stdout: output} = require('process');
//
// const rl = readline.createInterface({input, output});
// let count = 0
//
// rl.on('SIGINT', () => {
//     console.log(' ------ Exit, Goodbye ------ ')
//     fs.appendFileSync("02-write-file/new.txt", `\n ------ end of enter ------`);
//     fs.readFile("02-write-file/new.txt", "utf8",
//         function(error,data){
//             console.log("Асинхронное чтение файла");
//             if(error) throw error; // если возникла ошибка
//             console.log(data);  // выводим считанные данные
//         });
//     rl.close()
// });
// function GetSaveInfo(n) {
//     rl.question('Введите информацию:', (input) => {
//         console.log(`Enter data: ${input}`)
//         if (input === 'exit') {
//             console.log('------ Exit, Goodbye ------')
//             fs.appendFileSync("02-write-file/new.txt", `\n ------ end of enter ------ `);
//             rl.close()
//             fs.readFile("02-write-file/new.txt", "utf8",
//                 function(error,data){
//                     console.log("Асинхронное чтение файла");
//                     if(error) throw error; // если возникла ошибка
//                     console.log(data);  // выводим считанные данные
//                 });
//         } else {
//            count+=1
//             let date = new Date()
//             fs.appendFileSync("02-write-file/new.txt", `\ncount ${count}  ${date} : ${input}`);
//             console.log(`Received: ${input}`);
//             console.log(` ----------------------------- `);
//             GetSaveInfo(count)
//         }
//     })
//
// }
//
// GetSaveInfo()




