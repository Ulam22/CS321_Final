const accordionHeaders = document.querySelectorAll(".accordion-item-header");
accordionHeaders.forEach(accordionHeaders => {
    accordionHeaders.addEventListener("click", e =>
    {
accordionHeaders.classList.toggle("active");
    })
});

//var sidebar = document.querySelector("#sidebar");$(document).scroll( (e) => { sidebar.css("")})

