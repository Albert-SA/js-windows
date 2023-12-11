import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowsForm = document.querySelectorAll('.balcon_icons_img');
  const windowsWidth = document.querySelectorAll('#width');
  const windowsHeight = document.querySelectorAll('#height');
  const windowsType = document.querySelectorAll('#view_type');
  const windowsProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elems, prop) => {
    elems.forEach((elem, index) => {
      elem.addEventListener(event, () => {
        if (elem.nodeName == 'SPAN') {
          state[prop] = index;
        } else {
          state[prop] = elem.value;
        }
        console.log(state);
      });
    });
  };

  bindActionToElems('click', windowsForm, 'form');
  bindActionToElems('input', windowsWidth, 'width');
  bindActionToElems('input', windowsHeight, 'height');
  bindActionToElems('change', windowsType, 'type');
  bindActionToElems('change', windowsProfile, 'profile');
};

export default changeModalState;
