/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
          "value": 500,
          "density": {
              "enable": true,
              "value_area": 1000
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "star",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          }
      },
      "opacity": {
          "value": 1,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 100,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 100,
              "size": 5,
              "duration": 10,
              "opacity": 0,
              "speed": 5
          },
          "repulse": {
              "distance": 100,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
  } );