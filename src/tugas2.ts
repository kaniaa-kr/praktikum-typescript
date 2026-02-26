interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

function stokBuku(buku: Buku): string {
    return buku.tersedia ? "Tersedia" : "Habis";
} 

/* Catatan Pribadi: 
Function stokBuku menggunakan metode bernama ternary operator (alternatif satu baris dari if-else statement) untuk mengevaluasi properti 'tersedia' dari objek buku. 
Jika 'tersedia' bernilai true, maka fungsi akan mengembalikan string "Tersedia". Sebaliknya, jika 'tersedia' bernilai false, fungsi akan mengembalikan string "Habis". 
Metode ini memberikan cara yang efisien dan ringkas untuk menentukan status ketersediaan buku berdasarkan properti boolean yang ada pada objek Buku.
Syntax ternary operator: condition ? trueValue : falseValue */

function cetakBuku(buku: Buku): void {
    console.log(`-> Judul Buku: ${buku.judul}
-> Pengarang: ${buku.pengarang}
-> Tahun Terbit: ${buku.tahunTerbit}
-> Stok: ${stokBuku(buku)}`);
}

const data: Buku = {
    judul: "Catatan dari Penjara Perempuan",
    pengarang: "Nawal El-Sadaawi",
    tahunTerbit: 2003,
    tersedia: true
};

cetakBuku(data);
