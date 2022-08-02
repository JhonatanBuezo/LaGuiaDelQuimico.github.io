//Esto sirve para que se despliegue el menu lateral cuando la pantalla toma menores dimensiones

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}


//Esto es una mini animacion pedorra de los iconos del banner uwu

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.23 + "px";
    elemento2.style.top = posicion * 0.5 + "px";
}

