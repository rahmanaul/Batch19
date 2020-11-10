//Soal NO.1 Looping while
console.log("====SOAL NO 1=====");
var x = 2;
console.log("LOOPING PERTAMA");
while(x <= 20) { 
  console.log(x  + ' - I love coding');
  if (x == 20) {
      console.log("LOOPING KEDUA");
      while (x>=2) {
        console.log(x  + ' - I Will become a mobile developer');
        x = x - 2; 
      }
      break;
  }
  x = x + 2;
}

console.log("=====SOAL NO.2=====");

//Soal No.2 Looping For

for(var y=1; y<=20; y++ ){
    if(y %3 == 0 && y %2 != 0){
        console.log(y + " - I love Coding");
    } else if( y %2 == 0){
        console.log(y + " - Berkualitas");
    } else if(y %2 != 0 ){
        console.log(y + " - Santai");
    }
}

console.log("=====SOAL NO.3=====");

//Soal No 3 Membuat persegi Panjang
var str = ''
for(var i=1; i<=4; i++){
    for(var j=1; j<=8; j++){
        str +="#" ;
    }
    str +="\n";
}
console.log(str);

console.log("=====SOAL NO.4=====")

//Soal No 4 Membuat Tangga
var str = '';
for(i = 1; i <= 7 ; i++) {
    for(j = 1; j <= i; j++) {
       str += '#';
    }
    str += '\n';
}
console.log(str);

console.log("=====SOAL NO.5=====")
//Soal No 5 Papan Catur
var x=0
while(x<8){
    x++;
    if(x %2 != 0 ){
        console.log(" # # # #")
    }else if(x %2 == 0){
        console.log("# # # # ")
    }
}