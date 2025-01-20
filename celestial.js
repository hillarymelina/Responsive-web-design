const starsContainer = document.querySelector('.stars');
const numStars = 100; // Adjust the number of stars

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomly position the star
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random fall speed
    star.style.animationDelay = `${Math.random() * 2}s`; // Random delay to stagger the fall

    starsContainer.appendChild(star);
}