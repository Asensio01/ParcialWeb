var texto = document.getElementById('TextMostrarOcultar');
let timeoutId;
function ocultarTexto() {

        texto.style.display = "none";
        boton.textContent = "Mostrar";

}
 
var boton = document.getElementById('btnMostrarOcultar');

        function ocultarTexto() {
            texto.style.display = "none";
            boton.textContent = "Mostrar";  
        }
 
document.getElementById('btnMostrarOcultar').addEventListener('click', function() {
    
    
    if (texto.style.display === "none") {
        texto.style.display = "block";
        boton.textContent = "Ocultar";
        timeoutId = setTimeout(ocultarTexto, 5000);
    } else {
        texto.style.display = "none";
        boton.textContent = "Mostrar";
        timeoutId = clearTimeout(timeoutId);
    }
});




