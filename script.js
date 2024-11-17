document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelector(".text-slider-items").textContent.split(',');
  const textSlider = document.querySelector(".text-slider");
  let index = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = items[index];

    if (isDeleting) {
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
    }

    textSlider.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % items.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
  }

  type();
});

// dark light mode 
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


// BackToTop
var mybutton = document.getElementById("backToTopBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.visibility = "hidden";
  }
}

mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto scroll functionality in Header buttons 
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Header's button active functionality
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-items a');
  const sections = document.querySelectorAll('section');

  function setActiveLink() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - 60) && pageYOffset <= (sectionTop + sectionHeight - 60)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Initial check
});