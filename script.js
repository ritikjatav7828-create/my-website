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

