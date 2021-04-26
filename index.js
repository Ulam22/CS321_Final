const accordionHeaders = document.querySelectorAll(".accordion-item-header");
accordionHeaders.forEach(accordionHeaders => {
    accordionHeaders.addEventListener("click", e =>
    {
accordionHeaders.classList.toggle("active");
    })
});

var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');

var floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 40,
    bottomSpacing: 40
});
