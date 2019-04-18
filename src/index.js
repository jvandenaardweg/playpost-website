
require('normalize.css/normalize.css');
require('./styles/index.scss');

const { Howl } = require('howler');
const throttle = require('lodash/throttle');

document.addEventListener("DOMContentLoaded", () => {
  const btnLearnMore = document.getElementById('btn-learn-more');
  const btnPlayExample = document.getElementById('btn-play-example');
  const btnLearnMoreChevron = document.getElementById('btn-learn-more-chevron');

  window.addEventListener('scroll', throttle(() => {
    if (window.pageYOffset > 200 && !btnLearnMoreChevron.classList.contains('is-hidden')) {
      return btnLearnMoreChevron.classList.add('is-hidden');
    }

    if (window.pageYOffset < 200 && btnLearnMoreChevron.classList.contains('is-hidden')) {
      return btnLearnMoreChevron.classList.remove('is-hidden');
    }
  }, 100));

  btnLearnMore.addEventListener('click', () => {
    scrollIt(
      document.getElementById('features'),
      750,
      'easeInOutCubic'
    );
  });

  btnLearnMoreChevron.addEventListener('click', () => {
    scrollIt(
      document.getElementById('features'),
      750,
      'easeInOutCubic'
    );
  });

  const exampleSound = new Howl({
    src: ['assets/audio/example.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onplay: function() {
      btnPlayExample.classList.add('is-playing');
      btnPlayExample.classList.remove('is-paused');
    },
    onpause: function() {
      btnPlayExample.classList.remove('is-playing');
      btnPlayExample.classList.add('is-paused');
    },
    onstop: function() {
      btnPlayExample.classList.remove('is-playing');
      btnPlayExample.classList.remove('is-paused');
    },
    onend: function() {
      btnPlayExample.classList.remove('is-playing');
      btnPlayExample.classList.remove('is-paused');
    }
  });

  btnPlayExample.addEventListener('click', () => {
    if (btnPlayExample.classList.contains('is-playing')) {
      exampleSound.pause();
    } else {
      exampleSound.play();
    }
  })
});

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}
