const modals = () => {
  const bindModal = (triggersSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      //document.body.classList.remove('modal-open')
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        //document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      closeModal();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  showModalByTime('.popup', 2000);
};

export default modals;
