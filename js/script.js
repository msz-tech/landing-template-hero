const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("darkModeIcon");

toggle.addEventListener("click", () => {
  if(icon.classList.contains("bi-sun")){
    icon.classList.replace("bi-sun", "bi-moon-stars");
  } else {
    icon.classList.replace("bi-moon-stars", "bi-sun");
  }
});
