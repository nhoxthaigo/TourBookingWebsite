const initSlider = () => 
{
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".slide-img .slider-scrollbar");
    const ScrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");

    

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left : scrollAmount, behavior:"smooth"});
        });
    });

    const handleSlideButtons = () =>
    {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";

    }

    const updateScrollThumbPosition = ()=>
    {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - ScrollbarThumb.offsetWidth);
        ScrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll", () =>
    {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load",initSlider);