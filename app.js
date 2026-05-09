// Animación de aparición

const cards = document.querySelectorAll('.card, .jugador');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Configuración inicial

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "1s";
});

// Efecto interactivo mouse

document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.transform =
        `rotateX(${y/25}deg) rotateY(${x/25}deg)`;

    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });

});