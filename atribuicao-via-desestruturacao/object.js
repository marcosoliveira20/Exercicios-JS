const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Miranda',
    idade: '19',
     endereco: {
        rua: 'rua exemplo',
        numero: 320
    }
};
//atribuição via desestruturacao
// fazendo isso "nome: n = ''" eu estou acessando a chave nome e criando a varíavel n e definindo um valor padrão caso a chave não exista
const {nome: n = '', sobrenome, idade} = pessoa
console.log(n, sobrenome, idade);
