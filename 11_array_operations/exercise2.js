const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const printPromo = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
};

const generateMessages = (names) => {
  return names.map(printPromo);
};

module.exports = generateMessages