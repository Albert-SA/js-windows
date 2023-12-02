const tabs = (headerSelector, tabsSelector, contentsSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const tabsSec = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentsSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });
    tabsSec.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (item = 0) => {
    contents[item].style.display = 'block';
    tabsSec[item].classList.add(activeClass);
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
      tabsSec.forEach((tab, item) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(item);
        }
      });
    }
  });
};

export default tabs;
