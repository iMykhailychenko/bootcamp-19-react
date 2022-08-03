const sum = (a, b) => {
  return a + b;
};

const myDecorator = callback => {
  return (...args) => {
    console.log(...args);
    return callback(...args);
  };
};

myDecorator(sum)(1, 3);

sum(1, 3);
