const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
const caractersEspeciais = ['.', ',', '/', '!', '-'];
const vetores = [letras, caractersEspeciais];
const botao = document.querySelector('#ok');




const geraSequenciaAleatoria = (tamanho, vetor)=> {
    let senha='';
    for(let i=0;i<tamanho;i++){
        senha = senha + vetor[ Math.floor(Math.random() * vetor.length)];

    }
    return senha;
};



function geraSenha(temMaiuscula, temCaracter, quantidadeDeCaracteres, geraSequenciaAleatoria ){
    let senha;
    if(temCaracter){
        senha = geraSequenciaAleatoria(quantidadeDeCaracteres - 1, letras );
        senha = geraSequenciaAleatoria(1,caractersEspeciais ) + senha;

        if(temMaiuscula){
            let aux = senha.split(''); 
            for(let i=0; i<senha.length;i++){
                if(Math.floor(Math.random() * 2) % 2 === 0){
                    aux[i] = aux[i].toUpperCase();
                }
            }
            senha = aux.join('');
        }
        return senha;
    }

    senha = geraSequenciaAleatoria(quantidadeDeCaracteres, letras );
    if(temMaiuscula){
        let aux = senha.split("", ); 
        for(let i=0; i<senha.length;i++){
            if(Math.floor(Math.random() * 2) % 2 === 0){
                aux[i] = aux[i].toUpperCase();
            }
        }
        senha = aux.join('');
    }
    return senha;
}

var b = geraSenha(false, false, 10, geraSequenciaAleatoria )
console.log(b);


botao.addEventListener('click', function (e) {
    e.preventDefault();
   
    let hasMaiuscula = document.querySelector("#maiuscula").checked == true ;
    let hasCaracter = document.querySelector("#caracter").checked == true ;
    let quantidade = document.querySelector("#quantidade").value;
    const senha = document.querySelector("#senha");
    console.log("maiuscula", hasMaiuscula, "caracter", hasCaracter);
    senha.innerHTML = geraSenha(hasMaiuscula, hasCaracter, quantidade, geraSequenciaAleatoria )
});  