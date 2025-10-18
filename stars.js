const sky = document.querySelector('.sky');
const starCount = 70*2.5; // Adjust number of star
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const x = Math.random() * 0.8*window.innerWidth;
  const y = Math.random() * 4.8*window.innerHeight;
  const size = Math.random() * 3 + 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.animationDelay = `${Math.random() * 10}s`;

  sky.appendChild(star);
}

