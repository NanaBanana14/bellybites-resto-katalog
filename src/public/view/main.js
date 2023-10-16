/* eslint-disable max-len */
const focusCheckbox = () => {
  const checkbox = document.getElementById('check');
  checkbox.checked = !checkbox.checked;
  checkbox.focus();
};

const main = () => {
  const focusableElements = Array.from(document.querySelectorAll('a, button')).filter((element) => element.tabIndex >= 0);
  const check = document.getElementById('check');

  focusableElements.forEach((element, index) => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && index < focusableElements.length - 1) {
        focusableElements[index + 1].focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        focusableElements[index - 1].focus();
      }
    });
  });

  check.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      focusableElements[0].focus();
    } else if (e.key === 'ArrowLeft') {
      focusableElements[focusableElements.length - 1].focus();
    }
  });

  const bellybitesBtn = document.getElementById('nav-btn');
  if (bellybitesBtn) {
    bellybitesBtn.addEventListener('click', focusCheckbox);
  }
};

export default main;
