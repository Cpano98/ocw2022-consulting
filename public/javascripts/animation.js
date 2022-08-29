console.log("Animation File");

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 0.5,
    opacity: 1,
    ease: "Expo.easeIn",
  });

  tl.to(".loading-screen", {
    duration: 1,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", { opacity: "0" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
}

$(function () {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          contentAnimation();
        },

        async once(data) {
          contentAnimation();
        },
      },
    ],
  });
});
