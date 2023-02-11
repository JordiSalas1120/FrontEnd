document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scroollNav();
}
function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function(){
        console.log(sobreFestival.getBoundingClientRect().bottom);
        if (sobreFestival.getBoundingClientRect().bottom < 0 ){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
    }
    });
}
function scroollNav(){//al darle click en un enlance nos lleva hasta la seccion haciendo scrool
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();//evitamos que se cargue el scrool por default
            const seccionScroll = e.target.attributes.href.value; //target es a lo que hemos dado click
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"})//scrollIntoView la appi que usamos para el efecto
        });
    });
}
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML =
        `<source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen de la galeria">
        `;
        imagen.onclick = function(){
            mostrandoImagen(i);
        }
        galeria.appendChild(imagen);
    }
    
}

function mostrandoImagen(id){
    
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;
    //Creando el overlay con imagen
    const overlay = document.createElement('DIV');//el overlay lo creamos para oscurecer el fondo y mmostrar la imagen grande 
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){//elimina la ventana  y clase al darle click en cualquier parte del overlay y no solo en la x
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }

    //boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }
    

    overlay.appendChild(cerrarModal);

    //Añadirlo al HTML
    const body = document.querySelector('body');

    body.appendChild(overlay);
    body.classList.add('fijar-body')
}
    