// Seleziona gli elementi dalla pagina
const borsa = document.getElementById('borsa');
const scritta = document.getElementById('scritta');

// Aggiunge l'evento al click sulla borsa
borsa.addEventListener('click', () => {
    // Rimuove la classe per riavviare l'animazione, se già attiva
    scritta.classList.remove('animata');

    // Usa un timeout per permettere il riavvio dell'animazione
    setTimeout(() => {
        scritta.classList.add('animata');
    }, 10);
});