//Tugas Conditional IF-Else

var nama = "Jhon";
var peran = "guard";

if (nama == ""){
    console.log("Nama harus diisi!");
} else if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game!");
} else if (peran == "penyihir"){
    console.log("Halo penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
} else if (peran == "werewolf"){
    console.log("Halo werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
} else if (peran == "guard"){
    console.log("Halo guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else {
    console.log("Pilih peran yang sesuai (penyihir, werewolf, guard)");
}

console.log("");

//Tugas Conditional Switch Case

var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
switch(bulan) {
    case 1: { console.log(tanggal.toString() + " Januari " + tahun.toString()); break;}
    case 2: { console.log(tanggal.toString() + " Februari " + tahun.toString()); break;}
    case 3: { console.log(tanggal.toString() + " Maret " + tahun.toString()); break;}
    case 4: { console.log(tanggal.toString() + " April " + tahun.toString()); break;}
    case 5: { console.log(tanggal.toString() + " Mei " + tahun.toString()); break;}
    case 6: { console.log(tanggal.toString() + " Juni " + tahun.toString()); break;}
    case 7: { console.log(tanggal.toString() + " Juli " + tahun.toString()); break;}
    case 8: { console.log(tanggal.toString() + " Agustus " + tahun.toString()); break;}
    case 9: { console.log(tanggal.toString() + " September " + tahun.toString()); break;}
    case 10: { console.log(tanggal.toString() + " Oktober " + tahun.toString()); break;}
    case 11: { console.log(tanggal.toString() + " November " + tahun.toString()); break;}
    case 12: { console.log(tanggal.toString() + " Desember " + tahun.toString()); break;}
    default: { console.log("Masukan inputan");}

}