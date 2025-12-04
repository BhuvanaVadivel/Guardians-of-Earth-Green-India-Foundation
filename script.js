document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Navbar Scroll Effect
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add("nav-fixed", "shadow-lg");
    } else {
      navbar.classList.remove("nav-fixed", "shadow-lg");
    }
  });

  // Smooth Scroll
  window.scrollToSection = function (sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // FAQ Toggle
  window.toggleFAQ = function (button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");
    if (!content || !icon) return;
    content.classList.toggle("active");
    icon.classList.toggle("rotate-180");
  };

  // Contact Form
  
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal'); // your existing modal

  function openModal()  { successModal.classList.remove('hidden'); }
  function closeModal() { successModal.classList.add('hidden'); }
  window.closeModal = closeModal; // used by Close button

  const FORMSPREE_URL = 'https://formspree.io/f/xldqnvel'; // same URL as dashboard

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // stop normal redirect

    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        openModal();    // show "Message Sent Successfully!"
      } else {
        alert('There was a problem sending your message.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  });
});


  // Active Navigation Link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-green-600", "font-semibold");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("text-green-600", "font-semibold");
        }
      });
    });
  }

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});



  

document.addEventListener('DOMContentLoaded', function () {
  const thumbs   = document.querySelectorAll('.gallery-img');
  const viewer   = document.getElementById('viewer');
  const viewerImg = document.getElementById('viewerImg');

  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      viewerImg.src = img.src;          // show clicked image
      viewer.classList.remove('hidden');
    });
  });

  // close when clicking anywhere on overlay
  viewer.addEventListener('click', () => {
    viewer.classList.add('hidden');
    viewerImg.src = '';
  });
});

