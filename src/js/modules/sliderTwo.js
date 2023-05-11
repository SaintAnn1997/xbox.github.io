const sliderTwo = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, nextArrow) => {

    const slides = document.querySelectorAll(slidesSelector);
    const sliderWrapper = document.querySelector(sliderWrapperSelector);
    const slidesField = document.querySelector(slidesFieldSelector);
    const next = document.querySelector(nextArrow);

    const exclusiveWidth = window.getComputedStyle(sliderWrapper).width;

    let exclusiveSlideIndex = 1;
    let exclusiveOffset = 1399;

    slidesField.style.width = 100 * slides.length + '%';

    function changeClassSlide() {
        slides.forEach(slide => slide.classList.remove('exclusive-card--active'));
        slides[exclusiveSlideIndex].classList.add('exclusive-card--active');
    };

    changeClassSlide(exclusiveSlideIndex);

    next.addEventListener('click', () => {
        
        if (exclusiveSlideIndex === slides.length - 1) {
            exclusiveSlideIndex = 0;
        } else {
            exclusiveSlideIndex++;
        }
        
        if (exclusiveOffset >= +exclusiveWidth.slice(0, exclusiveWidth.length - 2) * (slides.length - 1)) {
            exclusiveOffset = 0;
        } else {
            exclusiveOffset = exclusiveSlideIndex * +exclusiveWidth.slice(0, exclusiveWidth.length - 2);
        }

        slidesField.style.transform = `translateX(-${exclusiveOffset / slides.length}px)`;
        changeClassSlide(exclusiveSlideIndex);
    });

};

export default sliderTwo;

