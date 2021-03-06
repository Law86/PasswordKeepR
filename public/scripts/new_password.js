(($) => {
  $(() => {
    // event handler
    $('#generate-password').on('click', handleGeneratePassword);
  });

  // prevents cross-site scripting
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // returns a generated password based on user criteria
  const handleGeneratePassword = () => {
    const options = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      number: '0123456789',
      symbol: '!@#$%^&*()_+~\`|}{[]:;?><,./-='
    }

    const getOption = [
      function uppercase() {
        return options.uppercase[Math.floor(Math.random() * options.uppercase.length)];
      },
      function lowercase() {
        return options.lowercase[Math.floor(Math.random() * options.lowercase.length)];
      },
      function number() {
        return options.number[Math.floor(Math.random() * options.number.length)];
      },
      function symbol() {
        return options.symbol[Math.floor(Math.random() * options.symbol.length)];
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
      let keyToAdd = getOption[Math.floor(Math.random() * getOption.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;

      if (isChecked) {
        password += keyToAdd();
      }
      newPassword.innerHTML = password;

      let passwordInput = document.querySelector('.password-generated');
      passwordInput.value = password;

    }
  }
})(jQuery);
