const notifyByEmail = (email) => {
  return `Email sent to : <${email}>`
}

const notifyByText = (text) => {
  return `Text sent to: <${text}>`
}

const notify = (contact_method, func_1) => {
  return func_1(contact_method);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));