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
};

export default tabs;
