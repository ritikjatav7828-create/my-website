// NAV TOGGLE
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle && navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  navToggle.classList.toggle('open');
});

// Set year in footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// Contact form handling with Formspree fallback
// Replace FORM_ENDPOINT with your Formspree endpoint to receive emails.
const FORM_ENDPOINT = "https://formspree.io/f/yourFormID"; // <-- replace

async function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending...';

  const data = new FormData(form);

  // If FORM_ENDPOINT replaced, send; else just redirect to thankyou
  if (FORM_ENDPOINT && !FORM_ENDPOINT.includes('yourFormID')) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        window.location.href = 'thankyou.html';
      } else {
        alert('Submission failed. Please try again.');
        console.error('Form error', res);
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Try again later.');
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  } else {
    // fallback redirect
    window.location.href = 'thankyou.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cf = document.getElementById('contact-form');
  if (cf) cf.addEventListener('submit', handleContactForm);
});
