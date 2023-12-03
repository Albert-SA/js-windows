const tabs = ({ headerSelector, tabsSelector, contentsSelector, activeClass }) => {
  const header = document.querySelector(headerSelector);
  const tabElems = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentsSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });
    tabElems.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (index = 0) => {
    contents[index].style.display = 'block';
    tabElems[index].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event) => {
    const target = event.target;
    if (
      target &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))
    ) {
      tabElems.forEach((tab, index) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
  // Add keyboard navigation
  document.addEventListener('keydown', (event) => {
    const tabElemIndex = Array.from(tabElems).indexOf(document.querySelector(`.${activeClass}`));
    console.log(tabElemIndex);
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.preventDefault();
      hideTabContent();
      if (event.code === 'ArrowLeft') {
        const newIndex = tabElemIndex === 0 ? tabElems.length - 1 : tabElemIndex - 1;
        showTabContent(newIndex);
      } else if (event.code === 'ArrowRight') {
        const newIndex = tabElemIndex === tabElems.length - 1 ? 0 : tabElemIndex + 1;
        showTabContent(newIndex);
      }
    }
  });
};

export default tabs;
