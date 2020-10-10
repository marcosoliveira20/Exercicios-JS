# Funcitons 


### Funcion expression


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

### Arrow Funciton

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




