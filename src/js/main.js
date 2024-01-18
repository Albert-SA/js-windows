import './slider';
import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modalState = {};

  changeModalState(modalState);

  modals();
  tabs({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentsSelector: '.glazing_content',
    activeClass: 'active',
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabsSelector: '.no_click',
    contentsSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
  });
  tabs({
    headerSelector: '.balcon_icons',
    tabsSelector: '.balcon_icons_img',
    contentsSelector: '.big_img > img',
    activeClass: 'do_image_more',
    display: 'inline-block',
  });
  forms(modalState);
  timer('.container1', '2024-12-21');
  images();
});
