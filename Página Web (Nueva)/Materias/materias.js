//Esto sirve para que se despliegue el menu lateral cuando la pantalla toma menores dimensiones

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}