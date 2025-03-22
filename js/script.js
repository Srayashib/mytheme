document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
const question = item.querySelector(".faq-question");
const answer = item.querySelector(".faq-answer");
const toggle = item.querySelector(".faq-toggle");

question.addEventListener("click", () => {
answer.classList.toggle("active");
toggle.textContent = answer.classList.contains("active") ? "−" : "+";
});
});