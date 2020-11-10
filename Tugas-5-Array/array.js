console.log("=====Soal NO.1=====");
//Soal No.1 Range
function range(startNum, finishNum) {
    var num = [];
    if (startNum < finishNum) {
        for(x = startNum; x <=finishNum; x++ ){
            num.push(x);
        }
        return num;
    } else if(startNum > finishNum){
        for(x = startNum; x >=finishNum; x-- ){
            num.push(x);
        }
        return num;
    } else if(startNum == null || finishNum == null){
        return -1;
    }
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


console.log("=====Soal No. 2=====")
//Soal No.2
function rangeWithStep(startNum, finishNum, step) {
    var num = [];
    if (startNum < finishNum) {
        for(x = startNum; x <=finishNum; x = x+step ){
            num.push(x);
        }
        return num;
    } else if(startNum > finishNum){
        for(x = startNum; x >=finishNum;x = x-step ){
            num.push(x);
        }
        return num;
    } else if(startNum == null || finishNum == null){
        return -1;
    }
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 



console.log("=====Soal No. 3=====")
//Soal No.3
function sum(startNum, finishNum, step) {
    var num = [];
    var sum = 0;
    if (startNum < finishNum && !step) {
        var currentNum = startNum;
        for(var i = 0; currentNum <= finishNum; i++){
            num.push(currentNum);
            currentNum++;
        }
    }else if(startNum > finishNum && !step){
        var currentNum = startNum;
        for(var i = 0; currentNum >= finishNum; i++){
            num.push(currentNum);
            currentNum--;
        }
    }else if(startNum > finishNum){
        var currentNum = startNum;
        for(var i = 0; currentNum >= finishNum; i++){
            num.push(currentNum);
            currentNum -= step;
        }
    } else if(startNum < finishNum){
        var currentNum = startNum;
        for(var i = 0; currentNum <= finishNum; i++){
            num.push(currentNum);
            currentNum+=step;
        }
    }
    for(var j=0; j<num.length;j++){
        sum+=num[j];
    }
    return sum;
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0



console.log("====soal No.4=====")
//Soal No.4 Array Multi Dimensi
console.log();

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data){
    for( var i = 0; i < data.length; i++){
        console.log("Nomor ID: ", data[i][0]);
        console.log("Nama Lengkap: ", data[i][1]);
        console.log("TTL: ", data[i][2], " ", data[i][3]);
        console.log("Hobi: ", data[i][4]);
        console.log();
    }
}

dataHandling(input);

console.log("===Soal No.5====");
//Soal No.5(Balik Kata)
function balikKata(kata){
    var balik = [];
    var karakter = kata.length - 1;
    var jadi = "";
    for(var i = 0; i < kata.length; i++){
        balik[i] = kata[karakter];
        karakter--;
        jadi+=balik[i];
    }

    return jadi;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

console.log();


console.log("=====Soal No.6====");
//Soal NO.6 Metode Array 
var input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){
    var ttl;
    var bulan;
    var namaBulan;

    data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(data);
    ttl = data[3].split("/");
    bulan = Number(ttl[1]);
    switch(bulan){
        case 1: { namaBulan = "Januari"; break;}
        case 2: { namaBulan = "Februari"; break;}
        case 3: { namaBulan = "Maret"; break;}
        case 4: { namaBulan = "April"; break;}
        case 5: { namaBulan = "Mei"; break;}
        case 6: { namaBulan = "Juni"; break;}
        case 7: { namaBulan = "Juli"; break;}
        case 8: { namaBulan = "Agustus"; break;}
        case 9: { namaBulan = "September"; break;}
        case 10: { namaBulan = "Oktober"; break;}
        case 11: { namaBulan = "November"; break;}
        case 12: { namaBulan = "Desember"; break;}
    }

    console.log(namaBulan);
    var urut = ttl.slice();
    
    for(var i = 0; i < urut.length; i++){
        urut[i] = Number(urut[i]);
    }

    urut.sort(function (a, b) { return b - a});

    for(var i = 0; i < urut.length; i++){
        urut[i] = String(urut[i]);
    }
    console.log(urut);

    var ttl2 = ttl.join("-");
    console.log(ttl2);

    var nama = data[1].split("");
    nama = nama.slice(0,14);
    nama = nama.join("");
    console.log(nama);
}

dataHandling2(input2);