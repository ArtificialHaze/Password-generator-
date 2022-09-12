const passwordElement = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const lengthElement = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

const upperCaseLetters = "QWERTYUIOPSADFGHJKLZXCVBNM";
const lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = '=!@#$%^&*()_+{}:"<>?';

const getLowerCaseLetters = () => {
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
};

const getUpperCaseLetters = () => {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
};

const getNumbers = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getSymbols = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  const len = lengthElement.value;
  let password = "";

  for (let i = 0; i < len; i++) {
    const pwValue = generate();
    password += pwValue;
  }

  passwordElement.innerText = password;
};

const generate = () => {
  const passwordValue = [];
  if (upper.checked) {
    passwordValue.push(getUpperCaseLetters());
  }
  if (lower.checked) {
    passwordValue.push(getLowerCaseLetters());
  }
  if (number.checked) {
    passwordValue.push(getNumbers());
  }
  if (symbol.checked) {
    passwordValue.push(getSymbols());
  }

  if (passwordValue.length === 0) return "";

  return passwordValue[Math.floor(Math.random() * passwordValue.length)];
};

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordElement.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Copied to clipboard.");
});
