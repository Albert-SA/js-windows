const forms = () => {
  const formElems = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся...',
    failure: 'Что-то пошло не так...',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading; // textContent == innerHtml
    let res = await fetch(url, {
      // fetch - асинхронный, поэтому async/await
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    }); //запрос POST

    return await res.text(); //promise
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };
  formElems.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form); //тело запроса
      const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('https://simple-server-cumz.onrender.com/api/data', jsonData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
