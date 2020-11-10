console.log("=====Soal No.1=====");
//Soal NO.1
function teriak() {
    return "Halo Sanbers!";
}
console.log(teriak());

console.log("=====Soal No.2=====");
//Soal NO.2
function kalikan(num1, num2) {
    return num1 * num2;
}
var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

console.log("=====Soal No.3=====");
//Soal NO.3
function introduce(name, age, address, hobby) {
    return `Nama Saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby} !`;
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);