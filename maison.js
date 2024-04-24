document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.presentationmaison');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelectorAll('.presentationmaison img');
    const totalImages = images.length;
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            counter++;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Arrêter le défilement lorsque toutes les images ont été affichées
        if (counter === totalImages - 1) {
            nextBtn.disabled = true; // Désactiver le bouton Suivant
        }
        // Activer le bouton Précédent si nécessaire
        if (counter > 0) {
            prevBtn.disabled = false;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Activer le bouton Suivant si nécessaire
        if (counter < totalImages - 1) {
            nextBtn.disabled = false;
        }
        // Désactiver le bouton Précédent s'il n'y a plus d'image précédente
        if (counter === 0) {
            prevBtn.disabled = true;
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.chambre');
    const prevBtn = document.querySelector('.prec');
    const nextBtn = document.querySelector('.suiv');
    const images = document.querySelectorAll('.chambre img');
    const totalImages = images.length;
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            counter++;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Arrêter le défilement lorsque toutes les images ont été affichées
        if (counter === totalImages - 1) {
            nextBtn.disabled = true; // Désactiver le bouton Suivant
        }
        // Activer le bouton Précédent si nécessaire
        if (counter > 0) {
            prevBtn.disabled = false;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Activer le bouton Suivant si nécessaire
        if (counter < totalImages - 1) {
            nextBtn.disabled = false;
        }
        // Désactiver le bouton Précédent s'il n'y a plus d'image précédente
        if (counter === 0) {
            prevBtn.disabled = true;
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.salon');
    const prevBtn = document.querySelector('.pi');
    const nextBtn = document.querySelector('.n');
    const images = document.querySelectorAll('.salon img');
    const totalImages = images.length;
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            counter++;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Arrêter le défilement lorsque toutes les images ont été affichées
        if (counter === totalImages - 1) {
            nextBtn.disabled = true; // Désactiver le bouton Suivant
        }
        // Activer le bouton Précédent si nécessaire
        if (counter > 0) {
            prevBtn.disabled = false;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Activer le bouton Suivant si nécessaire
        if (counter < totalImages - 1) {
            nextBtn.disabled = false;
        }
        // Désactiver le bouton Précédent s'il n'y a plus d'image précédente
        if (counter === 0) {
            prevBtn.disabled = true;
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.jeu');
    const prevBtn = document.querySelector('.pr');
    const nextBtn = document.querySelector('.ne');
    const images = document.querySelectorAll('.jeu img');
    const totalImages = images.length;
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            counter++;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Arrêter le défilement lorsque toutes les images ont été affichées
        if (counter === totalImages - 1) {
            nextBtn.disabled = true; // Désactiver le bouton Suivant
        }
        // Activer le bouton Précédent si nécessaire
        if (counter > 0) {
            prevBtn.disabled = false;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Activer le bouton Suivant si nécessaire
        if (counter < totalImages - 1) {
            nextBtn.disabled = false;
        }
        // Désactiver le bouton Précédent s'il n'y a plus d'image précédente
        if (counter === 0) {
            prevBtn.disabled = true;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.jardin');
    const prevBtn = document.querySelector('.pd');
    const nextBtn = document.querySelector('.nx');
    const images = document.querySelectorAll('.salon img');
    const totalImages = images.length;
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        if (counter < totalImages - 1) {
            counter++;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Arrêter le défilement lorsque toutes les images ont été affichées
        if (counter === totalImages - 1) {
            nextBtn.disabled = true; // Désactiver le bouton Suivant
        }
        // Activer le bouton Précédent si nécessaire
        if (counter > 0) {
            prevBtn.disabled = false;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carousel.style.transform = `translateX(-${counter * 100}%)`;
        }
        // Activer le bouton Suivant si nécessaire
        if (counter < totalImages - 1) {
            nextBtn.disabled = false;
        }
        // Désactiver le bouton Précédent s'il n'y a plus d'image précédente
        if (counter === 0) {
            prevBtn.disabled = true;
        }
    });
});
