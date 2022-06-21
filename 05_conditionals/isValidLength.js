const isValidLength = (validLength) => {
  const phoneNumber = 10;
  if (validLength.length === phoneNumber) {
    return true;
  } else {
    return false;
  }
}

module.exports = isValidLength