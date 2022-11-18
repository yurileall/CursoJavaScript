/*let pessoas = ['Rafael', 'José', 'André', 'Robson'];

function listarPessoas(pessoas) {
    this.pessoas;
}

console.log(pessoas);
*/

function Pessoa(nome, idade, sexo) {
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo

    console.log(this)
}
 
let pessoa1 = new Pessoa('rafael', 20, 'masculino');


function Carros(nome, marca, ano) {
    this.nome = nome,
    this.marca = marca,
    this.ano = ano

    console.log(this);
}

const Carro1 = new Carros('Uno', 'Fiat', '2000');