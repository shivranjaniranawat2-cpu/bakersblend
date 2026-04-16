// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Button interaction
function showAlert() {
  alert("Table reservation feature coming soon!");
}

// Navbar shadow effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
  function openMenu() {
  document.getElementById("menuPopup").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menuPopup").style.display = "none";
}
function openMenu() {
  document.getElementById("menuPopup").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menuPopup").style.display = "none";
}