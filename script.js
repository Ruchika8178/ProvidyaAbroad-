const faqs = document.querySelectorAll('.faq_item');

faqs.forEach(faq => {
  faq.querySelector('.faq_question').addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

document.getElementById("callBtn").addEventListener("click", function() {
    alert("📞 Our team will reach you soon!");
    window.location.href = "tel:+919729959181";
  });

  // Get elements
const startBtn = document.querySelector(".start");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.getElementById("closeForm");

// Open popup
startBtn.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
  popupForm.style.display = "none";
});

// Close when clicking outside form content
window.addEventListener("click", (e) => {
  if (e.target === popupForm) {
    popupForm.style.display = "none";
  }
});






/*<p id="formMsg" style="display:none; color:green;">✅ Thank you! We’ll reach out to you soon.</p>


const form = document.getElementById('journeyForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
  if (res.ok) {
    msg.style.display = 'block';
    form.reset();
  } else {
    alert('Something went wrong. Try again later.');
  }
});
*/
