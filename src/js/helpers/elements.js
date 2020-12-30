export default {
  get: (elm) => document.querySelector(elm),
  getAll: (elm) => document.querySelectorAll(elm),
  title: document.querySelector('title'),
  container: document.querySelector('.slides'),
  slides: document.querySelectorAll('.slides .slide'),
  headers: document.querySelectorAll('.slides .slide .header'),
  h1: (parent) => parent.querySelector('h1'),
};
