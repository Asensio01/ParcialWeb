
const botonContar = document.getElementById('btnClick'); // Cambiado a 'btnClick'
const contadorSpan = document.getElementById('clickCounter'); // Cambiado a 'clickCounter'
let contador = 0;


// Función para incrementar el contador
function incrementarContador() {
    contador++; 
    contadorSpan.textContent = contador; 

    
    if (contador % 5 === 0 && contador !== 0) {
        contadorSpan.style.color = 'red';
        contadorSpan.style.fontSize = '2rem';
        contadorSpan.style.fontWeight = 'bold';
        document.body.style.backgroundColor = '#f0e68c';
    } else {
        contadorSpan.style.color = 'black';
        contadorSpan.style.fontSize = '1.5rem';
        contadorSpan.style.fontWeight = 'normal';
        document.body.style.backgroundColor = ''; 
    }

    if (contador > 10) {
        contadorSpan.style.color = 'blue'; 
    } else {
        contadorSpan.style.color = 'black'; 
    }
}


// Asignar el evento 'click' al botón
botonContar.addEventListener('click', incrementarContador);
