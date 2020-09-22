const paragrafamos = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody  
    p.style.color = "white"
}