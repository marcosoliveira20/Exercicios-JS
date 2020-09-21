const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

const task = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
var element = document.getElementsByTagName('li');


add.onclick = function () {

    var text = task.value;
    if (text == '') {
        alert('Please, write a task!');
    } else {
        
        list.innerHTML += `<li><lable>${text}</lable> <i class="far fa-trash-alt delete"></i></li>`;
        task.value = '';
    }

};

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
};

list.addEventListener('click', deletetask);

function deletetask (ev){
    if (ev.target.classList.contains('delete') ) {
        ev.target.parentElement.remove();
    }
}

