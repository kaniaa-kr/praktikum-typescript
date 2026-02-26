class Lingkaran {
    constructor(public jariJari: number) {}

    public hitungLuas(): string {
        return `Luas lingkaran dengan jari-jari ${this.jariJari} cm adalah ${(Math.PI * this.jariJari ** 2).toFixed(2)} cm^2`;
    }
}

const circle = new Lingkaran(21);
console.log(circle.hitungLuas());