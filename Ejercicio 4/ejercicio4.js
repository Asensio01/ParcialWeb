const form = document.getElementById('formAgregarItem');
const listaDeItems = document.getElementById('listaDeItems');
const itemInput = document.getElementById('itemInput');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nuevoItem = itemInput.value.trim();

    
    if (nuevoItem !== "") {
        
        const li = document.createElement('li');
        li.textContent = nuevoItem;
        listaDeItems.appendChild(li);

       
        itemInput.value = "";
    }
});