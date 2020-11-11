var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
console.log("=====Soal No.2=====")
readBooksPromise(10000, books[0]).then(
  function(value){
    readBooksPromise(value, books[1]).then(
      function(value){
        readBooksPromise(value, books[2])
      }
    );
  }
);
