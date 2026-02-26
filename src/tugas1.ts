let nama: string = "Kania";
let umur: number = 19;

function hello(nama: string, umur: number) : string {
    return `Halo ${nama}, tahun depan umurmu ${umur+1} tahun. Selamat menua :)`;
}

console.log(hello(nama,umur));