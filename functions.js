function getVal() {
    const val = document.getElementById('name').value;
    const element = document.getElementById('name-output');
    element.innerHTML = val;
  }