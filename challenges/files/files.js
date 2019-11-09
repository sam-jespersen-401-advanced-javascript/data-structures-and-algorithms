const fs = require('fs').promises;


function renameFiles(path) {
  return fs.readdir(path)
    .then(contents => {
      return Promise.all(
        contents.map(file => {
          return Promise.all([fs.readFile(`${path}/${file}`),
            file.split('.')[0],
            fs.stat(`${path}/${file}`)
          ]);
        })
      );
    })
    .then((data) => {
      return data.forEach(entry => {
        const name = `${entry[0].toString()}-${entry[1]}-${entry[2].mtime.toJSON()}`;
        return fs.rename(`${path}/${entry[1]}.txt`, name);
      });
    });
}


renameFiles('./test/');
