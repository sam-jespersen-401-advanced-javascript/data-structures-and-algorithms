const fsPromises = require('fs').promises;

function transform(src) {

  fsPromises.readFile(src, 'utf8')
    .then(returnedText => {
      return returnedText.split('').reduce((acc, val) => {
        if(val === ' ' || val.toUpperCase() !== val) {
          acc.push(val);
        }
        return acc;
      }, [])
        .join('');
    })
    .then(returnedText => {
      return returnedText.toUpperCase();
    })
    .then(returnedText => {
      return returnedText
        .split('')
        .reverse()
        .join('');
    })
    .then(returnedText => {
      console.log(returnedText);
    });
}

transform('./file.txt');