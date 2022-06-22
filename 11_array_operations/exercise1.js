const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' 
];

const checkLength = (number) => {
  if (number.length < 11) {
    return true;
  } else {
    return false;
  }
};




const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength)
};

module.exports = filterLongNumbers
