async function getFiles(){
    //массив ифнформации по фалам
    let data = []

    //загружаем модуль fs
    let fs = require('fs');
    //загружаем модуль path
    const pathModule = require('path');
    //проверка на ввод параметров юзером node index secret-folder
    // if (process.argv.length <= 2) {
    //     console.log("Usage: " + __filename + " path/to/directory");
    //     process.exit(-1);
    // }
    //путь к папке
    // let path = process.argv[2];
    let path = '03-files-in-folder/secret-folder';
    // console.log(path)
    //цикл посика файлов
    try {
        //считываем папку и получаем массив
        const files = await fs.promises.readdir(path, {withFileTypes:true});

        // проходим по массиву
        for (const file of files)

            // проверяем элементы массива - что  это файлы и если файлы - обрабатываем их
            if (file.isFile()){
                // путь к каждому файлу
                let pathFile = path + '/' + file.name;
                //имя файла без расширения
                let fileName = pathModule.basename(file.name, pathModule.extname(file.name))
                //расширение файла
                let fileExtention = pathModule.extname(file.name).slice(1)

                // получаем размер файла в байтах и переводим в килобайты и больше
                let x = await fs.statSync(pathFile, function(err, stats) {
                    // console.log(   stats.size)
                })
                x = await bytesToSize(x.size)

                // data.push(`${pathModule.basename(file.name, pathModule.extname(file.name))} - ${pathModule.extname(file.name).slice(1)} - `)
                //собираем все данные до кучи в массив
                data.push(`${fileName} - ${fileExtention} - ${await x}`)
            }

    } catch (err) {
        console.error(err);
    }

  data.forEach( item =>{
      console.log(item)
  })

}

getFiles()

async function bytesToSize(bytes) {
    var sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    for (var i = 0; i < sizes.length; i++) {
        if (bytes <= 1024) {
            return bytes + '' + sizes[i];
        } else {
            bytes = parseFloat(bytes / 1024).toFixed(2)
        }
    }
    return bytes + ' P';
}
