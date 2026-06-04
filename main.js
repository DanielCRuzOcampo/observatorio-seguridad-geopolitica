/* =====================================
   OBSERVATORIO DE SEGURIDAD Y GEOPOLÍTICA
   main.js
===================================== */

/* ==========================
   CAMBIO DE IDIOMA
========================== */

const btnES = document.getElementById("btn-es");
const btnEN = document.getElementById("btn-en");

function activarIdioma(idioma){

    const elementosES = document.querySelectorAll(".es");
    const elementosEN = document.querySelectorAll(".en");

    if(idioma === "es"){

        elementosES.forEach(el=>{
            el.classList.remove("hidden");
        });

        elementosEN.forEach(el=>{
            el.classList.add("hidden");
        });

        localStorage.setItem("idioma","es");

    }

    if(idioma === "en"){

        elementosEN.forEach(el=>{
            el.classList.remove("hidden");
        });

        elementosES.forEach(el=>{
            el.classList.add("hidden");
        });

        localStorage.setItem("idioma","en");

    }

}

/* Botones */

if(btnES){

    btnES.addEventListener("click",()=>{
        activarIdioma("es");
    });

}

if(btnEN){

    btnEN.addEventListener("click",()=>{
        activarIdioma("en");
    });

}

/* Cargar idioma guardado */

const idiomaGuardado =
localStorage.getItem("idioma") || "es";

activarIdioma(idiomaGuardado);


/* ==========================
   BUSCADOR DE ARTÍCULOS
========================== */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

    const filtro =
    this.value.toLowerCase();

    const articulos =
    document.querySelectorAll(".article-card");

    articulos.forEach(articulo=>{

        const texto =
        articulo.textContent.toLowerCase();

        if(texto.includes(filtro)){

            articulo.style.display = "block";

        }else{

            articulo.style.display = "none";

        }

    });

});

}


/* ==========================
   NAVBAR ACTIVA
========================== */

const secciones =
document.querySelectorAll("section");

const enlaces =
document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let actual = "";

    secciones.forEach(seccion=>{

        const top =
        seccion.offsetTop - 120;

        const altura =
        seccion.clientHeight;

        if(pageYOffset >= top){

            actual =
            seccion.getAttribute("id");

        }

    });

    enlaces.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === "#" + actual
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================
   SCROLL SUAVE
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino =
document.querySelector(
this.getAttribute("href")
);

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================
   ANIMACIÓN DE ENTRADA
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".card,.article-card,.card-link,.profile,.radar-box"
)
.forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});


/* ==========================
   MENSAJE FORMULARIO
========================== */

const formulario =
document.querySelector(".contact-form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Gracias por tu mensaje. Pronto me pondré en contacto contigo."
);

formulario.reset();

});

}


/* ==========================
   AÑO AUTOMÁTICO FOOTER
========================== */

const footer =
document.querySelector("footer");

if(footer){

const year =
new Date().getFullYear();

const copyright =
footer.querySelector("p");

if(copyright){

copyright.innerHTML =
`© ${year} Observatorio de Seguridad y Geopolítica`;

}

}