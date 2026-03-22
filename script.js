// Handle mobile navigation toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.classList.toggle("open");
});

// Close nav when clicking a link (mobile)
nav.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "a") {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
  }
});

// Simple form validation and feedback
const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = ["name", "email", "date", "time", "guests"];
  let isValid = true;

  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    const error = field.parentElement.querySelector(".error-message");

    if (!field.value.trim()) {
      error.textContent = "Please fill out this field.";
      isValid = false;
    } else {
      error.textContent = "";
    }

    if (fieldId === "email" && field.value.trim()) {
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(field.value.trim())) {
        error.textContent = "Please enter a valid email address.";
        isValid = false;
      }
    }

    if (fieldId === "guests" && field.value.trim()) {
      const guests = Number(field.value);
      if (Number.isNaN(guests) || guests < 1) {
        error.textContent = "Number of guests must be at least 1.";
        isValid = false;
      }
    }
  });

  if (!isValid) {
    formNote.textContent =
      "Please review the highlighted fields and try again.";
    formNote.style.color = "#b83a3a";
    return;
  }

  // If valid, show a simple success message
  form.reset();
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  formNote.textContent =
    "Thank you! We have received your request and will confirm shortly.";
  formNote.style.color = "#1e1b18";
});

// Set current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
