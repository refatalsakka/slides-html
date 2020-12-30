import '../sass/style.scss';

import elm from './helpers/elements';
import SlideController from './controllers/SlideController';
import TitleController from './controllers/TitleController';

TitleController.setData('default', TitleController.getValue());

function open(e) {
  const slideController = new SlideController(e.target);

  if (!slideController.isSlide() || slideController.isSlideActive()) return;

  slideController.activeSlide();
  slideController.deactivateSlidesExceptTheClicked();

  TitleController.setValue(elm.h1(e.target).innerText);
}

function close() {
  SlideController.naturalSlides();
  TitleController.reset();
}

elm.slides.forEach((slide) => slide.addEventListener('click', open, false));
elm.headers.forEach((header) => header.addEventListener('click', close));
