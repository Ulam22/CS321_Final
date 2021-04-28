const accordionHeaders = document.querySelectorAll(".accordion-item-header");
accordionHeaders.forEach(accordionHeaders => {
    accordionHeaders.addEventListener("click", e =>
    {
accordionHeaders.classList.toggle("active");
    })
});

const stickyDiv = document.querySelector(".sticky");
window.addEventListener("scroll", function() {
  stickyDiv.style.top = window.pageYOffset + "px";
});