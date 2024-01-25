import throttle from 'lodash.throttle';
const key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const loadForm = () => {
  const storedForm = localStorage.getItem(key);
  if (storedForm) {
    const { email, message } = JSON.parse(storedForm);
    emailInput.value = email;
    messageInput.value = message;
  }
};

const formInput = throttle(() => {
  const formInfo = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(key, JSON.stringify(formInfo));
}, 500);

const formSubmit = event => {
  event.preventDefault();
  const savedObject = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(savedObject);

  localStorage.removeItem(key);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit);

loadForm();
