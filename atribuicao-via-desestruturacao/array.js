const numeros = [20, 30, 40, 50, 60, 70, 80];

// neste caso resto vai ser um array com o que sobrou depois da variavel 3

//esses três pontinhos podem ser chamado de rest(por ele pegar o resto)  ou spread
const [um, dois, tres, ...resto] = numeros;

// outra forma para pular espacos
const [quatro,  , cinco,  , seis, ...rest] = numeros;

console.log(resto[0])

const arrayss = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// exemplo de como acessa o número 6
console.log(arrayss[1][2]);