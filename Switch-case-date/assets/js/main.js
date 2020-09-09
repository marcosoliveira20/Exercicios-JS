
 function zeroAEsquerda (num) {
   return num >= 10 ? num : `0${num}`;
 }

function getWeekDay() {
    const data = new Date();
    const diaSemana = data.getDay();

    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            break;
        case 1:
            diaSemanaTexto = "Segunda";
            break;
        case 2:
            diaSemanaTexto = "Terça";
            break;
        case 3:
            diaSemanaTexto = "Quarta";
            break;
        case 4:
            diaSemanaTexto = "Quinta";
            break;
        case 5:
            diaSemanaTexto = "Sexta";
            break;

        case 6:
            diaSemanaTexto = "Sábado";
            break;
        default:
            diaSemanaTexto = "";
            break;
    }

    return diaSemanaTexto + ", " + data.getDate();

}

function getYear() {
    const data = new Date();
    let ano = data.getFullYear();
    return ano;
}

function getMonth() {
    const data = new Date();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let mes = data.getMonth();
    return meses[mes];
}

function getHour() {
    const data = new Date();
    return `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

const h1 = document.querySelector('.container h1');


// uma opção mais curta
const data = new Date();
const newLocal = 'pt-BR';
h1.innerHTML = data.toLocaleDateString(newLocal, { dateStyle: 'full' })

// uma um pouquinho mais longa para poder exercitar algumas coisas
h1.innerHTML = getWeekDay() + " " + getMonth() + " de " + getYear() + " " + getHour();
