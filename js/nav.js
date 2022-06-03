
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

addLinksScroll();
