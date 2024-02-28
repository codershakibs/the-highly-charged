// Portfolio image animation slide - 3 -/Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#portfolio-third-slide");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            perPage: 3,
            perMove: 1,
            height: '9rem',
            focus: 'center',
            trimSpace: false,
        });

        splide.mount({ URLHash });
    });
});
// Portfolio image animation slide -3 -/End