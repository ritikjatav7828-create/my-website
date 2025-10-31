// === NAV TOGGLE ===
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle && navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  navToggle.classList.toggle('open');
});

// year in footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// === CONTACT FORM SUBMIT HANDLER ===
// This file expects a form on contact.html with id="contact-form"
// Form behavior:
// 1) If you set FORM_ENDPOINT to a Formspree endpoint (https://formspree.io/f/yourID),
//    the script will POST there and on success redirect to thankyou.html
// 2) If FORM_ENDPOINT is left as placeholder, the script will simply redirect to thankyou.html
const FORM_ENDPOINT = "https://formspree.io/f/yourFormID"; // <-- REPLACE with your Formspree ID

async function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const data = new FormData(form);

  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';

  // If user replaced the FORM_ENDPOINT, send; otherwise skip and redirect to thankyou
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
        // attempt to parse json error
        const json = await res.json().catch(()=>null);
        alert('Submission failed. Please try again.');
        console.error('Formspree error', json || res);
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again later.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  } else {
    // No valid endpoint configured — fallback to simple redirect
    window.location.href = 'thankyou.html';
  }
}

// Attach if on contact page
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContactForm);
});
