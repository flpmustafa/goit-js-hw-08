var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onClickButton);

const KEY_LOCAL = 'feedback-form-state';
const obj = localStorage.getItem(KEY_LOCAL);
const parsedObj = JSON.parse(obj);

saveInput();

function onInput(element) { localStorage.setItem(KEY_LOCAL, JSON.stringify
    ({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );

  parsedObj[element.target.name] = element.target.value;
}

function saveInput() {
  if (obj) {
    form.elements.email.value = parsedObj.email || '';
    form.elements.message.value = parsedObj.message || '';
  }
}

function onClickButton(element) {
    element.preventDefault();
    element.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL);
  console.log(parsedObj);
}
