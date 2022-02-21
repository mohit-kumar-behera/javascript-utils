const folderData = require('./data/folderData');

const findAllFile = function (folder) {
  let items = [];

  for (let val of Object.values(folder)) {
    if (typeof val === 'object' && !Array.isArray(val)) {
      items.push(...findAllFile(val));
    } else {
      if (val.includes('.')) {
        items.push(val);
      }
    }
  }

  return items;
};

const allFiles = findAllFile(folderData);
console.log(allFiles);
