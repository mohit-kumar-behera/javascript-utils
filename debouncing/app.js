import debounce from './debounce.js';
const inputBox = document.querySelector('.input-box');
const outputBox = document.querySelector('.output-box');

const costlyFunction = function (data) {
  const outputText = data
    ? `I am a costly function, now computing for ${data}`
    : '';
  outputBox.value = outputText;
};

const handleInputChange = debounce(function (e) {
  const val = e.target.value;
  costlyFunction(val);
}, 1000);

inputBox.addEventListener('keyup', handleInputChange);
