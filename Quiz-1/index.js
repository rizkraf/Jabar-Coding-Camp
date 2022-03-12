function next_date(tanggal, bulan, tahun) {
    var strBulan;

    switch (bulan) {
        case 1:
            {
                strBulan = "Januari";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "Februari"; }
                break;
            }
        case 2:
            {
                strBulan = "Februari";
                if (tanggal >= 29) { tanggal -= 29; strBulan = "Maret"; }
                break;
            }
        case 3:
            {
                strBulan = "Maret";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "April"; }
                break;
            }
        case 4:
            {
                strBulan = "April";
                if (tanggal >= 30) { tanggal -= 30; strBulan = "Mei"; }
                break;
            }
        case 5:
            {
                strBulan = "Mei";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "Juni"; }
                break;
            }
        case 6:
            {
                strBulan = "Juni";
                if (tanggal >= 30) { tanggal -= 30; strBulan = "Juli"; }
                break;
            }
        case 7:
            {
                strBulan = "Juli";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "Agustus"; }
                break;
            }
        case 8:
            {
                strBulan = "Agustus";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "September"; }
                break;
            }
        case 9:
            {
                strBulan = "September";
                if (tanggal >= 30) { tanggal -= 30; strBulan = "Oktober"; }
                break;
            }
        case 10:
            {
                strBulan = "Oktober";
                if (tanggal >= 31) { tanggal -= 31; strBulan = "November"; }
                break;
            }
        case 11:
            {
                strBulan = "November";
                if (tanggal >= 30) { tanggal -= 30; strBulan = "Oktober"; }
                break;
            }
        case 12:
            {
                strBulan = "Desember";
                if (tanggal > 30) { tanggal -= 31; strBulan = "Januari"; tahun += 1 }
                break;
            }
        default:
            { console.log("Bulan tidak valid"); }
    }
    return (tanggal + 1) + " " + strBulan + " " + tahun;
}

var tanggal = 31;
var bulan = 12;
var tahun = 2020;

console.log(next_date(tanggal, bulan, tahun));