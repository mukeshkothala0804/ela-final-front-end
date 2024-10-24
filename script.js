let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header
    header.classList.add('hide');
  } else {
    // Scrolling up, show the header
    header.classList.remove('hide');
  }

  lastScrollTop = scrollTop;
});

// Fade in/out effects during scroll
const sections = document.querySelectorAll("section.parallax");
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.content').classList.add("fade-in");
        } else {
            entry.target.querySelector('.content').classList.remove("fade-in");
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});
// Toggle the visibility of the navbar when the menu button is clicked
document.getElementById('menu-btn').addEventListener('click', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
});

// Close the navbar when any link inside the navbar is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('active');
  });
});
