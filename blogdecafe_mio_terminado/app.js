const toggle = document.getElementById('toggle');
const body = document.querySelector('body')
toggle.onclick = function (){
    toggle.classList.toggle('activar');
    body.classList.toggle('activar');
}