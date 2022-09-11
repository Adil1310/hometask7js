const array = ['one','two','three','one','three'];
let debug = [];
const newArray = array.filter((item, index) => {
  debug.push({ item, index, indexOf: array.indexOf(item) })
  return index === array.indexOf(item);
});

console.table(debug)