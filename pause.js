// Отримуємо елементи DOM для всіх карток
const cards = document.querySelectorAll(".card");

// Встановлюємо початковий стан анімації (пауза)
let animationPaused = true;

// Функція для зміни стану анімації
function toggleAnimation() {
    if (animationPaused) {
        cards.forEach((card) => {
            card.style.animationPlayState = "running";
        });
    } else {
        cards.forEach((card) => {
            card.style.animationPlayState = "paused";
        });
    }
    animationPaused = !animationPaused; // Змінюємо стан анімації
}

// Додаємо обробник кліку для всіх карток
cards.forEach((card) => {
    card.addEventListener("click", toggleAnimation);
});

// Додаємо обробник кліку для задньої сторони всіх карток
const cardBacks = document.querySelectorAll(".card-back");
cardBacks.forEach((cardBack) => {
    cardBack.addEventListener("click", toggleAnimation);
});

