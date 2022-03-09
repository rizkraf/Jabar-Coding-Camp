// Soal 1

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

console.log(pertama.substring(0, 5).concat(pertama.substring(12, 19)).concat(kedua.substring(0, 8)).concat(kedua.substring(8, 18).toUpperCase()));

// Soal 2

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

console.log(Number(kataPertama) + Number(kataKedua) * Number(kataKetiga) + Number(kataKeempat));

// Soal 3

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 19);
var kataKeempat = kalimat.substring(19, 25);
var kataKelima = kalimat.substring(25);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);