const accordionHeaders = document.querySelectorAll(".accordion-item-header");
accordionHeaders.forEach(accordionHeaders => {
    accordionHeaders.addEventListener("click", e =>
    {
accordionHeaders.classList.toggle("active");
    })
});
