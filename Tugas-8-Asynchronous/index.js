var readBooks = require('./callback.js')
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Tulis code untuk memanggil function readBooks di sini
console.log("=====Soal.No1=====")
readBooks(10000, books[0], function(waktu){
  readBooks(waktu, books[1],function(waktu1){
    readBooks(waktu1, books[2], function(waktu2){
      console.log("Semua buku telah terbaca")
    });
  } );
});




