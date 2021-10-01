var card = document.querySelectorAll(".card");
// console.log(card);

var isFlipped = false;
var first;
var second;

card.forEach((c) => {
  //   console.log(c);
  c.addEventListener("click", flip);
});

// var flip = () => {
//   console.log("flipped");
// };
function flip() {
  // console.log("flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    first = this;
  } else {
    second = this;
    console.log(first);
    console.log(second);
    cheakit();
  }
}

function cheakit() {
  if (first.dataset.image === second.dataset.image) {
    sucess();
  } else {
    fail();
  }
}

function sucess() {
  console.log("sucess");
  first.removeEventListener("click", flip);
  second.removeEventListener("click", flip);
  reset();
}

function fail() {
  console.log("fail");
  setTimeout(() => {
    first.classList.remove("flip");
    second.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  first = null;
  second = null;
}

(function suffle() {
  card.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
