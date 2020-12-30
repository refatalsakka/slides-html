import elms from '../helpers/elements';

export default class TitleController {
  static getValue() {
    return elms.title.innerText;
  }

  static setValue(value) {
    elms.title.innerText = value;
  }

  static reset() {
    elms.title.innerText = elms.title.dataset.default;
  }

  static setData(data, value) {
    elms.title.dataset[data] = value;
  }

  static getData(data) {
    return elms.title.dataset[data];
  }
}
