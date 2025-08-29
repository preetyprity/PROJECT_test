// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Recipe Search Filter
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("recipeSearch");
  const cards = document.querySelectorAll(".recipe-card");
  const rowContainer = document.querySelector(".row.g-4");

  // "No Results" message তৈরি
  let noResult = document.createElement("div");
  noResult.className = "text-center fw-bold text-danger mt-4";
  noResult.style.display = "none";
  noResult.textContent = "❌ No recipes found!";
  rowContainer.parentNode.appendChild(noResult);

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      let filter = searchInput.value.toLowerCase();
      let matchFound = false;

      cards.forEach(function (card) {
        let title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(filter)) {
          card.parentElement.style.display = "block"; // show card
          matchFound = true;
        } else {
          card.parentElement.style.display = "none"; // hide card
        }
      });

      // যদি কিছু না মেলে, মেসেজ দেখাও
      noResult.style.display = matchFound ? "none" : "block";
    });
  }
});

// ✅ Toast Function
function showToast(message, type = "success") {
  let toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add to Cart Functionality (localStorage সহ)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");

      // লোকাল স্টোরেজ থেকে কার্ট পাওয়া
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // চেক করো যদি কার্টে আগেই থাকে তাহলে আবার যোগ করো না
      if (!cart.includes(name)) {
        cart.push(name);
        localStorage.setItem("cart", JSON.stringify(cart));
        showToast(`✅ ${name} added to cart! 🛒`, "success");
      } else {
        showToast(`⚠️ ${name} is already in the cart!`, "warning");
      }
    });
  });
});
