function jumlah_kata(str) {
    var kata = str.trim().
        split(" ").
        filter(function (spasi) { return spasi != "" }).
        length;
    return kata;
}

var kalimat_1 = " Halo nama saya Rizky Rafi Azhara ";
var kalimat_2 = " Saya Rizky";
var kalimat_3 = " Saya Rizky Rafi Azhara ";

console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));
console.log(jumlah_kata(kalimat_3));