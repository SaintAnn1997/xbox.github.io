const slider = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, prevArrow, nextArrow) => {

    const slides = document.querySelectorAll(slidesSelector);
    const sliderWrapper = document.querySelector(sliderWrapperSelector);
    const slidesField = document.querySelector(slidesFieldSelector);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    
    const width = window.getComputedStyle(sliderWrapper).width;
    const dotsArr = [];
    
    let slideIndex = 1;
    let offset = 0;
    
    slidesField.style.width = 100 * slides.length + '%';
    
    slides.forEach(slide => {
        slide.style.width = width;
    });
    
    const dots = document.createElement('ol');
    dots.classList.add('promo__slider-dots');
    sliderWrapper.append(dots);
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('promo__slider-dot');
        dots.append(dot);
    
        if (i == 0) {
            dot.classList.add('promo__slider-dot--active');
        }
    
        dotsArr.push(dot);
    }
    
    function changeClassDot() {
        dotsArr.forEach(dot => dot.classList.remove('promo__slider-dot--active'));
        dotsArr[slideIndex - 1].classList.add('promo__slider-dot--active');
    };
    
    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) { 
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    
        changeClassDot();
    });
    
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    
        changeClassDot();
    });
    
    dotsArr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
    
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            changeClassDot();
        })
    });

};

export default slider;


