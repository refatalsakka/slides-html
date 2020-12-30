import elms from '../helpers/elements';

export default class SlideController {
  constructor(slide) {
    this.slide = slide;
  }

  activeSlide(slide) {
    const s = slide || this.slide;
    s.classList.add('slide-active');
    s.classList.remove('slide-deactivate');
  }

  deactivateSlide(slide) {
    const s = slide || this.slide;
    s.classList.add('slide-deactivate');
    s.classList.remove('slide-active');
  }

  isSlideActive(slide) {
    const s = slide || this.slide;
    return s.classList.contains('slide-active');
  }

  isSlide(element) {
    const s = element || this.slide;
    return s.classList.contains('slide');
  }

  deactivateSlidesExceptTheClicked(clickedSlide) {
    const s = clickedSlide || this.slide;

    elms.slides.forEach((slide) => {
      if (slide.getAttribute('data-slide') !== s.getAttribute('data-slide')) {
        this.deactivateSlide(slide);
      }
    });
  }

  static naturalSlides() {
    elms.slides.forEach((slide) => {
      slide.classList.remove('slide-deactivate');
      slide.classList.remove('slide-active');
    });
  }
}
