const tabs = ({
  headerSelector,
  tabsSelector,
  contentsSelector,
  activeClass,
  display = 'block',
}) => {
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
    contents[index].style.display = display;
    tabElems[index].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  const selectTab = (event) => {
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
  };

  header.addEventListener('click', selectTab);
  document.addEventListener('keydown', selectTab);
};

export default tabs;
