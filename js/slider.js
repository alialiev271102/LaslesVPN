let offset = 0;
const sliderLine = document.querySelector('.coments-block__spiner-line');
const sliderBox = document.querySelector('.coments-block__spiner-box');
console.log(sliderBox.offsetWidth);
const circles = document.querySelectorAll(".circle");

document.querySelector(".next").addEventListener("click", () => {
    offset += sliderBox.offsetWidth;
    if (offset > sliderBox.offsetWidth * 2) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
    checkCircles();
});

document.querySelector(".prev").addEventListener("click", () => {
    offset -= sliderBox.offsetWidth;
    if (offset < 0) {
        offset = sliderBox.offsetWidth * 2;
    }
    sliderLine.style.left = -offset + "px";
    checkCircles();
});

const checkCircles = () => {
    switch (offset) {
        case 0:
            circles[0].classList.add("circle-active");
            circles[1].classList.remove("circle-active");
            circles[2].classList.remove("circle-active");
            break;
        case sliderBox.offsetWidth:
            circles[0].classList.remove("circle-active");
            circles[1].classList.add("circle-active");
            circles[2].classList.remove("circle-active");
            break;
        case sliderBox.offsetWidth * 2:
            circles[0].classList.remove("circle-active");
            circles[1].classList.remove("circle-active");
            circles[2].classList.add("circle-active");
            break;
    }
}
checkCircles();

circles.forEach(elem => {
    elem.addEventListener("click", () => {
        offset = 0;
        offset = offset + sliderBox.offsetWidth * Number(elem.id);
        console.log(offset)
        checkCircles();
        sliderLine.style.left = -offset + "px";
    })
})


