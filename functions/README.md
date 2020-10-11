# Funcitons 


### Function expression


```
//se você quiser também pode nomear a função a baixo porém é incomum
const souUmDado = function (){
    console.log('Sou um dado.');
}


function executaFuncao (funcao){
    funcao();
}

execuFuncao(souUmDado);

```

### Arrow Function

Seria uma function expression um pouco mais curta que o normal, é função 'recente' do JS, veio na última versão.

Exemplo:

```
const funcaoArrow = () => {
    console.log('Sou uma arrow funciton')
}

funcaoArrow();
```

### Funções e objetos

Dentro de uma função posso ter um objeto também por exemplo:

```
const obj = {
    falar: function(){
        console.log('Estou falando...')
    }
}

// ou 

const obj = {
   falar(){
        console.log('Estou falando...')
    }
}

obj.falar();
```

### Parâmetros de uma função

Podemos enviar valores dentro de uma função para que tais valores sejam usados dentro da função. 

- Quando declaro um função usando a palavra reservada function, mesmo que eu não declare nenhum parâmetro e passe argumentos para a mesma eu posso capturar tais argumentos usando a palavra reservada arguments. Exemplo: 

```
function funcao(){
    console.log(arguments);
    console.log(arguments[1]);
}

funcao('valor', 1, 2, 3);

```

- O contrário também pode acontecer posso declarar uma função, com vários parâmetros e na hora de chama-la não passar a mesma quantidade de argumentos. E assim as váriaveis dentro da função serão criadas com o valor de 'undefined'

Exemplo

```
function funcao(a, b, c, d, e, f, g){
    console.log(a, b, c, d, e, f, g);
}

funcao('valor', 1);

```


- É possível atribuir valores padrões para um parâmetro caso não seja passado um argumento.



Exemplo

```
function soma(a, b){
    b = b || 0;
    console.log(a + b);
}

soma(1);

// ou 

function soma(a, b = 2){
    console.log(a + b);
}

```

- Posso usar o rest operator para receber varios argumentos. Para usar o rest operator ele tem que ser o último

```
function soma(a, b, ...c){
    console.log(a + b + c );
}

function('a', 'b', 'c', 'd', 'e', 'f', 'g');
```


### Retorno de função

- Assim que você usa a palavra return a função é encerrada e retorna o determinado.
```
function funcao(){
    console.log('Parei aqui');
    return 0;
    console.log('não cheguei aqui');    
}

funcao();

```

- Posso ter funções que não retornam nada.
```
function funcao(){
    console.log('Olá mundo');
} 
funcao();
```

- Posso ter funções que retoram qualquer tipo de dado ou até mesmo um função

```

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'))

```
