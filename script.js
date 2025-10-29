// script.js - small interactive examples

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.js-hello-btn');
  if(btn){
    btn.addEventListener('click', () => {
      alert('Hello Ritik! 👋 Your site is live and interactive.');
    });
  }

  // Smooth scroll (agar aage anchor links add karoge)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
console.log("RJ Tech website loaded successfully 🚀");
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._gotcha && form._gotcha.value) return; // spam protection
    status.textContent = 'Sending...';

    const data = new FormData(form);

    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        status.textContent = 'Message sent — thank you!';
        form.reset();
      } else {
        status.textContent = 'Something went wrong — try again later.';
      }
    } catch (err) {
      status.textContent = 'Network error — check your connection.';
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
});

