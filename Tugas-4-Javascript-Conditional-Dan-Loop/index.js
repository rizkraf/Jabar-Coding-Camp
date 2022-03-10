// Soal 1

var nilai = 80;

if (nilai >= 85) {
    console.log("A");
} else if (nilai < 85 && nilai >= 75) {
    console.log("B");
} else if (nilai < 75 && nilai >= 65) {
    console.log("C");
} else if (nilai < 65 && nilai >= 55) {
    console.log("D");
} else {
    console.log("E");
}

// Soal 2

var tanggal = 1;
var bulan = 6;
var tahun = 2003;

switch (bulan) {
    case 1: { console.log(tanggal + " Januari " + tahun); break; }
    case 2: { console.log(tanggal + " Februari " + tahun); break; }
    case 3: { console.log(tanggal + " Maret " + tahun); break; }
    case 4: { console.log(tanggal + " Apri " + tahun); break; }
    case 5: { console.log(tanggal + " Mei " + tahun); break; }
    case 6: { console.log(tanggal + " Juni " + tahun); break; }
    case 7: { console.log(tanggal + " Juli " + tahun); break; }
    case 8: { console.log(tanggal + " Agustus " + tahun); break; }
    case 9: { console.log(tanggal + " September " + tahun); break; }
    case 10: { console.log(tanggal + " Oktober " + tahun); break; }
    case 11: { console.log(tanggal + " November " + tahun); break; }
    case 12: { console.log(tanggal + " Desember " + tahun); break; }
    default: {
        console.log("Tidak ada bulan");
    }
}

// Soal 3

var n = 7;

for (var o = 0; o < n; o++) {
    var pagar = "";
    for (var p = 0; p <= o; p++) {
        pagar += "#";
    }
    console.log(pagar);
}

// Soal 4

var m = 10;

for (var angka = 1; angka <= m; angka++) {
    if ((angka % 3) == 1) {
        console.log(angka + " - " + "I love Programming");
    } else if ((angka % 3) == 2) {
        console.log(angka + " - " + "I love Javascript");
    } else if ((angka % 3) === 0) {
        console.log(angka + " - " + "I love VueJS");
        var pembatas = "";
        for (var p = 0; p < angka; p += 3) {
            pembatas += "===";
        }
        console.log(pembatas);
    }
}