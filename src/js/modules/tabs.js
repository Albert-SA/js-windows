const tabs = ({ headerSelector, tabs, contentsSelector, activeClass }) => {
  const header = document.querySelector(headerSelector);
  const tabElems = document.querySelectorAll(tabs);
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
      (target.classList.contains(tabs.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabs.replace(/\./, '')))
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
