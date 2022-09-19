/*
let constrain = 500;
let ex1Layer = document.querySelectorAll(".ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

onmousemove = function (e) {
  for (let i = 0; i < ex1Layer.length; i++) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer[i]]);

    window.requestAnimationFrame(function () {
      transformElement(ex1Layer[i], position);
    });
  }
};
*/

let constrain = 100;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.querySelectorAll(".ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

onmousemove = function (e) {
  for (let i = 0; i < ex1Layer.length; i++) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer[i]]);

    window.requestAnimationFrame(function () {
      transformElement(ex1Layer[i], position);
    });
  }
};
