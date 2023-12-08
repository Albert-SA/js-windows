import './slider';
import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modals();
  forms();
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
});
