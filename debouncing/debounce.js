const debounce = function (fn, timeout = 300) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
};
export default debounce;
