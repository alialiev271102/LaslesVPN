function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
    let heightNav = 250;
    navBtn.onclick = function () {
        if (mainNav.classList.contains('nav-hidden')) {
            mainNav.classList.remove('nav-hidden');
            navBtn.classList.remove("nav-btn");
            navBtn.classList.add("nav-btn-active");
            mainNav.style.height = heightNav + 'px';
        } else {
            mainNav.classList.add('nav-hidden');
            navBtn.classList.remove("nav-btn-active");
            navBtn.classList.add("nav-btn");
            mainNav.style.height = 0;
        }
    }
}

const addLinksScroll = () => {
    const links = document.getElementsByClassName('nav__link');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link?.href.split('#')[1];
            const scrollElement = document.getElementById(href);
            scrollElement.scrollIntoView({behavior: "smooth"})
        })
    }
}

navToggle();
addLinksScroll();
