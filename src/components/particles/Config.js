export const MultiColor = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: [
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor()
        ]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#b6b2b2"
        }
      },
      opacity: {
        value: 0.8,
        random: false,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 8.017060304327615,
        random: true,
        animation: {
          enable: true,
          speed: 12.181158184520175,
          minimumValue: 0.1,
          sync: false
        }
      },
      lineLinked: {
        enable: true,
        distance: 50,
        color:getRandomColor(),
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outMode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "connect"
        },
        onClick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        connect: {},
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    detectRetina: true
};

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}

export const MultiSnow = {
    backgroundMode: {
        enable: true,
        zIndex: 0
    },
    particles: {
        number: {
        value: 1000,
        density: {
            enable: true,
            value_area: 800
        }
        },
        color: {
        value: "#ffffff"
        },
        shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#000000"
        },
        image: {
            src: "img/github.svg",
            width: 100,
            height: 100
        }
        },
        opacity: {
        value: 0.4,
        random: true,
        anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
        }
        },
        size: {
        value: 3,
        random: true,
        anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
        }
        },
        line_linked: {
        enable: false
        },
        move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
        onhover: {
            enable: false
        },
        onclick: {
            enable: false
        },
        resize: false
        }
    },
    retina_detect: true
};

export const SnowMove = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: [
          "#344455",
          "#ffffff"
        ]
      },
      shape: {
        type: "edge",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: "#fff",
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: true
};