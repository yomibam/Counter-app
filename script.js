let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerHTML = count;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.innerHTML = 0;
  count = 0;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    countEl.innerHTML = count;
  }
}

function reset() {
  count = 0;
  countEl.innerHTML = count;
}
