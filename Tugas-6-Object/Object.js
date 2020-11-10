console.log("=====No.1=====");
//Soal No.1 Array to Object
console.log();
function arrayToObject(data) {
  var object = {};
  var now = new Date();
  var thisYear = now.getFullYear();
  for(x=0; x<data.length; x++){
    object.firstName = data[x][0];
    object.lastName = data[x][1];
    object.gender = data[x][2];
    object.age = data[x][3];
    if(object.age == null || object.age > thisYear){
      object.age = "Invalid birth year";
    } else{
      object.age = thisYear - object.age;
    }
    console.log(x+1 +". " +object.firstName + " " + object.lastName);
    console.log(object);
  }
}
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2);
arrayToObject([]);


console.log("=====No. 2=====");
//Soal No.2 (Shopping Time)
console.log();
function shoppingTime(memberId, money) {
  var sale = {
    "Sepatu Stacattu" : 1500000,
    "Baju Zoro" : 500000,
    "Baju H&N" : 250000,
    "Sweater Uniklooh" : 175000,
    "Casing Handphone" : 50000
  }
  var buy ={}
  buy.memberId = memberId;
  buy.money = money;
  //buy.listPurchased = Object.keys(sale);
  buy.listPurchased = [];
  // change = Object.values(sale);
  // buy.moneyChange = change
  /*for loop untuk melakukan pengurangan uang dan penambahan jumlah barang belanja
  serta console.log(money) untuk mengethui jumlah uang setelah dibelanjakan*/
  for(var x=0; x<5; x++){
    if(!memberId || memberId == ""){
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if(money<50000){
      return "Mohon maaf, uang tidak cukup";
    }else if(money>=1500000 && !buy.listPurchased.includes("Sepatu Stacattu")){
      buy.listPurchased.push("Sepatu Stacattu");
      money = money - 1500000;
      //console.log(money);
    } else if(money>=500000 && !buy.listPurchased.includes("Baju Zoro")){
      buy.listPurchased.push("Baju Zoro");
      money = money - 500000;
      //console.log(money);
    }else if(money>=250000 && !buy.listPurchased.includes("Baju H&N")){
      buy.listPurchased.push("Baju H&N");
      money = money - 250000;
      //console.log(money);
    }else if(money>=175000 && !buy.listPurchased.includes("Sweater Uniklooh")){
      buy.listPurchased.push("Sweater Uniklooh");
      money = money - 175000;
      //console.log(money);
    }else if(money>=50000 && !buy.listPurchased.includes("Casing Handphone")){
      buy.listPurchased.push("Casing Handphone");
      money = money - 50000;
      //console.log(money);
    } 
  }
  buy.changeMoney = money;
  return buy;
}
// console.log(shoppingTime('1820RzKrnWn08', 3000000));
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log();

console.log("=====Soal No.3=====");
//Soal No.3 Naik Angkot
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var paraPenumpang = {};
  var penampung = [];
  for(var i=0; i<arrPenumpang.length; i++){
    //paraPenumpang.penumpang = arrPenumpang[i][0];
    //console.log(paraPenumpang.penumpang);
    var naik = paraPenumpang.naikDari = arrPenumpang[i][1];
    //console.log(paraPenumpang.naikDari);
    var turun = paraPenumpang.tujuan = arrPenumpang[i][2];
    //paraPenumpang.tujuan = arrPenumpang[i][2];
    //console.log(paraPenumpang);
    var n = naik.charCodeAt(0);
    // console.log(n);
    var t = turun.charCodeAt(0);
    // console.log(t);
    
    // paraPenumpang.bayar = 2000 * jarak.length ;
    penampung.push({
      penumpang : arrPenumpang[i][0], 
      naikDari : arrPenumpang[i][1], 
      tujuan : arrPenumpang[i][2],
      bayar : (t - n)*2000});
  }
  //console.log(paraPenumpang)
  return penampung;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));
