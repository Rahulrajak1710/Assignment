const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');


console.log(sort('hello world raha')); 