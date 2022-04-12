// THIS CODE DID NOT WORK
// (() => {
  const slider = document.getElementById('password-range');
  const output = document.getElementById('value');
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
// });

