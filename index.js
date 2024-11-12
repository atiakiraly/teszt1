document.querySelector('.scroll-arrow-left').addEventListener('click', function() {
    document.querySelector('.player-grid').scrollBy({ left: -200, behavior: 'smooth' });
});

document.querySelector('.scroll-arrow-right').addEventListener('click', function() {
    document.querySelector('.player-grid').scrollBy({ left: 200, behavior: 'smooth' });
});


const playerGrid = document.querySelector('.player-grid');
const leftArrow = document.querySelector('.scroll-arrow-left');
const rightArrow = document.querySelector('.scroll-arrow-right');

function updateArrows() {
    if (playerGrid.scrollLeft === 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
    }

    if (playerGrid.scrollLeft + playerGrid.clientWidth >= playerGrid.scrollWidth) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'block';
    }
}

leftArrow.addEventListener('click', function() {
    playerGrid.scrollBy({ left: -200, behavior: 'smooth' });
});

rightArrow.addEventListener('click', function() {
    playerGrid.scrollBy({ left: 200, behavior: 'smooth' });
});

playerGrid.addEventListener('scroll', updateArrows);

updateArrows();
