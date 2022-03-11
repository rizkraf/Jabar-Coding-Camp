// Soal 1

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();

daftarHewan.forEach(function (urutHewan) {
    console.log(urutHewan);
});

// Soal 2

function introduce() {
    return "Nama saya " + data.name + ", " + "umur saya " + data.age + " tahun" + ", " + "alamat saya di " + data.address + ", " + "dan saya punya hobby yaitu " + data.hobby;
}

var data = { name: "Rizky Rafi Azhara", age: 18, address: "Permata Cimahi", hobby: "Menonton sepak bola" }

var perkenalan = introduce(data);
console.log(perkenalan);

// Soal 3

function hitung_huruf_vokal(huruf) {
    var hurufVokal = "aiueo";
    var hurufKecil = huruf.toLowerCase();
    var hitungHuruf = 0;
    for (var index = 0; index < hurufKecil.length; index++) {
        if (hurufVokal.indexOf(hurufKecil[index]) !== -1) {
            hitungHuruf += 1;
        }
    }
    return hitungHuruf;
}

var hitung_1 = hitung_huruf_vokal("Rizky Rafi")
var hitung_2 = hitung_huruf_vokal("Azhara")

console.log(hitung_1, hitung_2)

// Soal 4

function hitung(int) {
    var angka = -2;
    for (var index = 0; index < int; index++) {
        angka += 2;
    }
    return angka
}

console.log(hitung(0));
console.log(hitung(1));
console.log(hitung(2));
console.log(hitung(3));
console.log(hitung(5));