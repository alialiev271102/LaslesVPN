let offset = 0;
const sliderLine = document.querySelector('.coments-block__spiner-line');

document.querySelector(".next").addEventListener("click", () => {
    offset += 400;
    if (offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", () => {
    offset -= 400;
    if (offset < 0) {
        offset = 800 ;
    }
    sliderLine.style.left = -offset + "px";
});
