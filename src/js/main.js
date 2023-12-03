import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs({
    headerSelector: '.glazing_slider',
    tabs: '.glazing_block',
    contentsSelector: '.glazing_content',
    activeClass: 'active',
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabs: '.no_click',
    contentsSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
  });
});
