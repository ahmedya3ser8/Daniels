// text animation
var typed = new Typed('#element', {
  strings: ['Designer', 'Developer', 'Larry Daniels'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// change navbar bg
const nav = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.header a');

window.addEventListener('scroll', function() {
  if (window.scrollY > 700) {
    nav.classList.add('change-bg');
    navLink.forEach((nav) => {
      nav.classList.add("change-link", "head-scroll");
    });
  } else {
    nav.classList.remove('change-bg');
    navLink.forEach((nav) => {
      nav.classList.remove("change-link", "head-scroll");
    });
  }
});

// scroll progress animated
const section = document.querySelector('.about');
const spans = document.querySelectorAll('.progress span');

window.addEventListener('scroll', function() {
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.prog;
    })
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    })
  }
});

// counter increment
const counterSection = document.querySelector('.counter');
const numbers = document.querySelectorAll('.counter .number');
let started = false;

window.addEventListener("scroll", function() {
  if (window.scrollY > counterSection.offsetTop - 300) {
    if (!started) {
      numbers.forEach((num) => startCounter(num));
    }
    started = true;
  }
});

function startCounter(num) {
  let number = +num.dataset.number;
  let currentNumber = 0;
  let increment = Math.ceil(number / 100); 

  let counter = setInterval(() => {
    currentNumber += increment;
    num.textContent = currentNumber;
    if (currentNumber >= number) {
      num.textContent = number;
      clearInterval(counter);
    }
  }, 20);
}
