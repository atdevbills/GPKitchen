// Change these two lines for each restaurant. Everything else updates itself.
const WHATSAPP_NUMBER = "233593798620"; // country code + number, no + or spaces
const GREETING = "Hello, I would like to place an order.";

// Every link with data-order opens WhatsApp. Add data-dish="Dish name" to include the dish in the message.
document.querySelectorAll("[data-order]").forEach((link) => {
  const dish = link.dataset.dish;
  const text = dish ? `Hello, I would like to order ${dish}.` : GREETING;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Highlight the nav link of the section you are viewing (home page only)
const links = document.querySelectorAll(".nav a[href^='#']");
if (links.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  links.forEach((l) => { const s = document.querySelector(l.getAttribute("href")); if (s) observer.observe(s); });
}
