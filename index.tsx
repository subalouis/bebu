
// Vanilla JS logic for the Valentine surprise
// Keeping it in index.tsx to satisfy the platform's entry point structure

// Define the nextStep property on the window object to satisfy TypeScript
declare global {
  interface Window {
    nextStep: (step: number) => void;
  }
}

window.nextStep = (step: number) => {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const next = document.getElementById(`step-${step}`);
    if (next) {
        next.classList.add('active');
    }
};

const createHeart = () => {
    const container = document.getElementById('heart-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 4;
    const delay = Math.random() * 5;

    heart.style.fontSize = `${size}px`;
    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
};

// Start heart animation
setInterval(createHeart, 400);

// Initialize some hearts immediately
for(let i=0; i<10; i++) createHeart();

// Export to window so inline onclick handlers can find them
(window as any).nextStep = window.nextStep;
