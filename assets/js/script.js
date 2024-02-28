document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".explore-proggress");

    var splide = new Splide('.splide', {
        focus: 0.64,
        trimSpace: false,
        perPage: 5,
        perMove: 4,
        gap: "30px",
        updateOnMove: true,
        pagination: false,
        // autoplay: true,
        speed: 2500,

    });
    var bar = splide.root.querySelector('.my-slider-progress-bar');
    splide.on('mounted move', function () {
        var end = splide.Components.Controller.getEnd() + 1;
        var rate = Math.min((splide.index + 1) / end, 1);
        bar.style.width = String(100 * rate) + '%';
    });
    splide.mount();
});