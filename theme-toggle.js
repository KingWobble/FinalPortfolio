window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");

  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
});
