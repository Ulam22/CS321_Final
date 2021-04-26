const accordionHeaders = document.querySelectorAll(".accordion-item-header");
accordionHeaders.forEach(accordionHeaders => {
    accordionHeaders.addEventListener("click", e =>
    {
accordionHeaders.classList.toggle("active");
    })
});

window.addEventListener('scroll', () =>
{
    var nav = document.querySelector("#navigation");

   nav.css("transform", "translateY(50%)");

} 
});



