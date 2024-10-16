var slider = tns({
  container: ".aboutReview__slider",
  items: 1,
  speed: 700,
  slideBy: "1",
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  responsive: {
    1250: {
      items: 1,
    },
    520: {
      items: 1,
    },
  },
});