// basic remote fetch example

document.addEventListener('DOMContentLoaded', init);

function init() {
  fetch("https://www.colr.org/json/colors/random/7")
  .then(response => response.json()) 
  .then(data => {
    let myColors = []
    data.colors.forEach(item => {
      myColors.push("#" + item.hex);
    });
    console.log('colors', myColors);
    let block1 = document.querySelector('.light');
    let block2 = document.querySelector('.mid');
    let block3 = document.querySelector('.dark');

    block1.style.backgroundColor = myColors[0];
    block2.style.backgroundColor = myColors[1];
    block3.style.backgroundColor = myColors[2];
    document.body.style.backgroundColor = myColors[3];
  }).catch(err => {
    console.error('oops', err.message);
  });
}
