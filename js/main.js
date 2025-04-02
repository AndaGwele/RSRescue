document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu functionality
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const menuClose = document.querySelector(".mobile-menu-close")
  const mobileMenu = document.querySelector(".mobile-menu")

  // Create overlay element
  const overlay = document.createElement("div")
  overlay.className = "overlay"
  document.body.appendChild(overlay)

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  // Close mobile menu
  menuClose.addEventListener("click", closeMenu)
  overlay.addEventListener("click", closeMenu)

  function closeMenu() {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  }

  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-menu a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Fade in animations
  const fadeElements = document.querySelectorAll(".fade-in")

  // Immediately activate hero elements
  setTimeout(() => {
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("active")
      }, index * 200)
    })
  }, 100)

  // Scroll animations
  const scrollElements = document.querySelectorAll(
    ".service-card, .testimonial-card, .section-header, .feature-list li",
  )

  function checkScroll() {
    scrollElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("fade-in")
        element.classList.add("active")
      }
    })
  }

  // Initial check
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)

  // Responsive button text
  const emergencyBtn = document.querySelector(".hero-buttons .btn-primary .btn-text")

  function updateButtonText() {
    if (window.innerWidth < 576) {
      emergencyBtn.textContent = "Call Now"
    } else {
      emergencyBtn.textContent = "Emergency Towing"
    }
  }

  // Initial check
  updateButtonText()

  // Update on resize
  window.addEventListener("resize", updateButtonText)
})

