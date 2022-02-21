const memoize = function (fn) {
  const cache = {};

  return function (...args) {
    const argsKey = JSON.stringify(args);

    if (!(argsKey in cache)) {
      cache[argsKey] = fn.apply(this, args);
    }

    return cache[argsKey];
  };
};

module.exports = memoize;
