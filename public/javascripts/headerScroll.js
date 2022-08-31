window.onscroll = function () {
  changeHeaderColor();
};

function changeHeaderColor() {
    let header = document.getElementById("mainNavigation");
  if (document.documentElement.scrollTop > 150) {
    header.classList.add("headerBackground");
    header.classList.remove("headerBackgroundTrans");
  } else {
    header.classList.remove("headerBackground");
    header.classList.add("headerBackgroundTrans");
    
  }
}
