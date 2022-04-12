// THIS CODE DID NOT WORK

// (() => {
  // const slider = document.getElementById('password-range');
  // const output = document.getElementById('value');
  // output.innerHTML = slider.value;

  // slider.oninput = function() {
  //   output.innerHTML = this.value;
  // }
// });

console.log('I\'m working!');

$(() => {


// prevents cross-site scripting
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// returns a generated password based on user criteria
const handleGeneratePassword = () => {
  const keys = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+~\`|}{[]:;?><,./-='
  }

  const getKey = [
    function uppercase() {
      return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
    },
    function lowercase() {
      return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

  const upper = document.getElementById('uppercase').checked;
  const lower = document.getElementById('lowercase').checked;
  const number = document.getElementById('number').checked;
  const symbol = document.getElementById('symbol').checked;

  if (upper + lower + number + symbol === 0) {
    alert('Please check at least one box!');
  }

  const newPassword = document.getElementById('new-password');
  const length = document.getElementById('length');
  let password = '';

  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;

    if (isChecked) {
      password += keyToAdd();
    }
    newPassword.innerHTML = password;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const password = document.getElementById('new-password').innerHTML;
  const confirmPass = confirm('Happy with this password? '+ password);
  if (!confirmPass) return;

  const body = {password};
};

  // event handler
  $('#generate-password').on('click', handleGeneratePassword);
  $('#submit-btn').on('click', handleSubmit);
});
