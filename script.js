let score = 0;
const footImage = document.getElementById('foot-image');
const scoreDisplay = document.getElementById('score');

// Fonction pour changer l'image du pied (couper l'ongle)
function changeFootImage() {
    footImage.src = 'images/pied_ongle_coupe.png'; // Image du pied avec l'ongle coupé
    setTimeout(() => {
        footImage.src = 'images/pied_ongle.png'; // Remet l'image du pied normal après 0.5s
    }, 500);
}

// Fonction pour augmenter le score
function increaseScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`; // Affiche le score mis à jour
}

// Ajouter un événement au clic sur l'image du pied
footImage.addEventListener('click', () => {
    increaseScore();    // Augmenter le score
    changeFootImage();  // Changer l'image du pied (coupé)
});
