// scripts.js
const particleContainer = document.querySelector('.particle-container');

// Function to generate a random number within a specified range
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a particle
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize size and position
    const size = randomRange(2, 8);
    const top = randomRange(0, window.innerHeight);
    const left = randomRange(0, window.innerWidth);
    const duration = randomRange(4, 8);

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${top}px`;
    particle.style.left = `${left}px`;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);

    // Remove particle from DOM after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Function to generate particles continuously
function generateParticles() {
    setInterval(createParticle, 300); // Adjust the interval as needed
}

generateParticles();
