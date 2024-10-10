let images = document.querySelectorAll('img');
let buttons = document.querySelectorAll('button');
let messageElement = document.getElementById('message').querySelector('p');
let hiddenImages = 0;

images.forEach((image) => {
    image.style.display = 'none';
    hiddenImages++;
});

checkIfAllImagesAreHidden();

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let image = images[index];
        if (image.style.display === 'none' || image.style.display === '') {
            image.style.display = 'block';
            button.textContent = 'Ocultar';
            hiddenImages--;
        } else {
            image.style.display = 'none';
            button.textContent = 'Mostrar';
            hiddenImages++; 
        }
        checkIfAllImagesAreHidden();
    });
});

function checkIfAllImagesAreHidden() {
    if (hiddenImages === images.length) {
        messageElement.textContent = 'Todas las imágenes están ocultas';
    } else {
        messageElement.textContent = ''; 
    }
}
