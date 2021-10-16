var count = document.querySelector(".counter");
var counter = 0;
var decre = document.querySelector(".decrement button");
function increase() {
  counter++;
  if (counter > 0) {
    decre.style.background = "teal";
  }
  count.innerText = counter;
}

function decrease() {
  if (counter > 0) {
    counter--;
    count.innerText = counter;
    decre.style.background = "teal";
    if (counter == 0) {
      decre.style.background = "rgb(125, 209, 209)";
    }
  }
}
