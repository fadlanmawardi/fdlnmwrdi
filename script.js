const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('active');
});

const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

fadeEls.forEach(el => observer.observe(el));


const text = "hi! I'm fadlan";
const typingElement = document.querySelector("#typing-text");

let index = 0;
let isDeleting = false;
let letters = [];

function typeLoop() {
  if (!isDeleting) {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text.charAt(index);
      typingElement.appendChild(span);

      setTimeout(() => {
        span.classList.add("visible");
      }, 50);

      letters.push(span);
      index++;
      setTimeout(typeLoop, 150);
    } else {
      
      setTimeout(() => {
        isDeleting = true;
        typeLoop();
      }, 1500);
    }
  } else {
    if (letters.length > 0) {
      const lastSpan = letters.pop();
      lastSpan.remove();
      index--;
      setTimeout(typeLoop, 100);
    } else {
      isDeleting = false;
     
      setTimeout(typeEffect, 500); 
    }
  }
}


const words = [
  "Web Designer",
  "Frondend Developer",
  "Backand Developer",
  "Mobile Developer",
  "UX/UI Designer",
  "Graphic Designer"
];

const wordEl = document.getElementById("changing-word");

let wordIndex = 0;
let charIndex = 0;
let isDeleting2 = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  wordEl.textContent = currentText;

  if (!isDeleting2 && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting2 && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting2) {
      isDeleting2 = true;
      setTimeout(typeEffect, 1000); 
    } else {
      isDeleting2 = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  typeLoop(); // Start the typing effect
});