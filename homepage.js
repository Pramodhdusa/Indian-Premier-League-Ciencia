let slideindex = 0;
slideshow();

function slideshow() {
    const container = document.getElementsByClassName("container");
    for (let i = 0; i < container.length; i++) {
        container[i].style.display = "none";
    }
    if (slideindex >= container.length) {
        slideindex = 0;
    }
    container[slideindex].style.display = "block";
    setTimeout(slideshow, 2000);
    slideindex++;
}
