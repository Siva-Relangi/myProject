// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




// Smooth Scroll (Optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Stats Counter Animation
  document.addEventListener("DOMContentLoaded", () => {
    const statNumbers = document.querySelectorAll(".stat-number");
    const options = { threshold: 1 };

    const animateNumbers = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const value = parseInt(target.getAttribute("data-value"));
          let current = 0;

          const increment = Math.ceil(value / 100);
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              target.textContent = `${value}+`;
              clearInterval(interval);
            } else {
              target.textContent = `${current}+`;
            }
          }, 20);

          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(animateNumbers, options);
    statNumbers.forEach((number) => observer.observe(number));


  // FAQ Accordion
  const faqTitles = document.querySelectorAll(".faq-accordion-list-title");
  faqTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const wrap = title.nextElementSibling;
      wrap.style.display = wrap.style.display === "block" ? "none" : "block";
      title.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".explore-more-btn")
    .addEventListener("click", function () {
      const hiddenCards = document.querySelector(".hidden-cards");
      if (hiddenCards) {
        console.log("Revealing hidden cards...");
        hiddenCards.style.display = "flex"; // Show hidden cards
        console.log("Hiding the button...");
        this.style.display = "none"; // Hide the button
      } else {
        console.log("Hidden cards not found!");
      }
    });
});

observer.observe(statsSection);

//Product
document.addEventListener("DOMContentLoaded", function () {
  // Explore More Button for Hidden Cards
  const exploreMoreBtn = document.querySelector(".explore-more-btn");
  const hiddenCards = document.querySelector(".hidden-cards");

  if (exploreMoreBtn) {
    exploreMoreBtn.addEventListener("click", function () {
      if (hiddenCards) {
        hiddenCards.style.display = "flex"; // Show hidden cards
        this.style.display = "none"; // Hide the button
      } else {
        console.error("Hidden cards not found!");
      }
    });
  }

  // FAQ Accordion
  const faqTitles = document.querySelectorAll(".faq-accordion-list-title");
  faqTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const wrap = title.nextElementSibling;
      wrap.style.display = wrap.style.display === "block" ? "none" : "block";
      title.classList.toggle("active");
    });
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add your form submission logic here

  // Show success message
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Message Sent!";
  submitBtn.style.background = "#10B981";

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.background = "";
    contactForm.reset();
  }, 3000);
});

// Navbar Scroll Effect
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});
