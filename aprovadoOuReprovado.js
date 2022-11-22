class Aluno {
    constructor(nota1, nome, idade, serie) {
        this.nome = nome
        this.idade = idade
        this.serie = serie
        this.nota1 = nota1
        console.log(this);
    }

    verificarNotas() {
        if (this.nota1 >= 6) {
            return 'Aprovado';
        }

        else {
            return 'Reprovado';
        }

    }
}

let Yuri = new Aluno(6, 'Breno', 17, "Terceiro ano");
console.log(Yuri.verificarNotas());



