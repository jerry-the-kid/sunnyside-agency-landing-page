gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector('body');
const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navChoice = document.querySelector('.navbar__items');

const toggleMenu = function () {
  navChoice.classList.toggle('hidden');
  body.classList.toggle('no-scroll');
};

hamburger.addEventListener('click', toggleMenu);
navChoice.addEventListener('click', function (e) {
  const target = e.target.closest('.navbar__item');
  if (!target) return;
  if (window.screen.width < 750) toggleMenu();
});

const animate = function () {
  const setOption = function (trigger, position = 'top', viewport = 'center') {
    return {
      trigger: `${trigger}`,
      toggleActions: 'play play none none',
      start: `${position} ${viewport}`,
    };
  };

  const setContentOption = trigger => {
    return {
      scrollTrigger: setOption(`${trigger}`),
      y: '40%',
      opacity: 0,
      duration: 2,
      delay: 0.5,
    };
  };

  gsap.to('.navbar', {
    scrollTrigger: {
      trigger: '.header',
      toggleActions: 'play play reset none',
      start: 'center center',
      end: 'center 45%',
    },
    position: 'fixed',
    top: 0,
    backgroundColor: `rgba(136, 255, 247, 0.5)`,
    padding: '2rem 4rem',
  });

  const setImgOption = function (trigger, translate) {
    return {
      scrollTrigger: setOption(`${trigger}`),
      x: `${translate}`,
      opacity: 0,
      duration: 2,
    };
  };

  gsap.from('.info__img--1', setImgOption('.info__img--1', '40%'));

  gsap.from('.info__content--1', setContentOption('.info__content-box--1'));

  gsap.from('.info__content--2', setContentOption('.info__content-box--2'));

  gsap.from('.service__right', setImgOption('.service__right', '-40%'));

  gsap.from('.service__left', setImgOption('.service__left', '40%'));

  gsap.from('.info__img--2', setImgOption('.info__img--2', '-40%'));

  gsap.from('.testimonial', {
    scrollTrigger: setOption('.testimonials'),
    opacity: 0,
    y: 100,
    stagger: 0.4,
    duration: 1.5,
  });

  gsap.from('.gallery__pic', {
    scrollTrigger: setOption('.gallery'),
    x: '-100%',
    stagger: 0.4,
    duration: 1.5,
  });

  gsap.from('.heading--4', {
    scrollTrigger: setOption('.testimonials', 'top', '40%'),
    opacity: 0,
    duration: 1.5,
    y: 100,
  });
};

animate();
