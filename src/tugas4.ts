function sapa(parameter: string | number) {
    if (typeof parameter === "string") {
        console.log(`Halo, ${parameter}!`);
    } else if (typeof parameter === "number"){
        console.log(`Umur: ${parameter} tahun.`)
    }
}

sapa("Kania");
sapa(19);