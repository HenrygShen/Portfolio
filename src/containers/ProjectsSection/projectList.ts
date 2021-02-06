const projects = [
  {
    name: "Smart Diet Diary",
    id: "smart-diet-diary",
    thumbnail: "Smart-Diet-Diary/1.png",
    techStack: ["Python", "JavaScript", "Tensorflow", "React-Native"],
    descriptions: [
      "A Diet diary for the mobile platform developed in hopes of making diet tracking more convenient and helpful.",
      "The food detection and calorie estimation take place on the back-end server and was achieved using the TensorFlow Object Detection API.",
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/Smart-Diet-Diary",
        name: "Github"
      }
    ],
    portrait: true,
    screenshots: ["Smart-Diet-Diary/1.png", "Smart-Diet-Diary/2.png", "Smart-Diet-Diary/3.png", "Smart-Diet-Diary/4.png"]
  },
  {
    name: "Pacmana Jones",
    id: "pacmana-jones",
    thumbnail: "Pacman/1.png",
    techStack: ["Java", "JavaFX"],
    descriptions: [
      "A modified version of pacman where Indiana Jones has become Pacman.",
      "The special pellets grants the player the ability to whip enemies instead of the ability to eat them.",
      "All the assets were self-made using Photoshop, MS Paint, and Audacity."
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/PacmanGame",
        name: "Github"
      }
    ],
    portrait: false,
    screenshots: ["Pacman/1.png", "Pacman/2.png", "Pacman/3.png", "Pacman/4.png", "Pacman/5.png", "Pacman/6.png", "Pacman/7.png"]
  },
  {
    name: "Perfect Pitch Test",
    id: "perfect-pitch-test",
    thumbnail: "Perfect-Pitch-Test/1.png",
    techStack: ["JavaScript", "React"],
    descriptions: [
      "A web application that allows the user to test their ability to identify which music note is being played and train their perfect pitch.",
      "The number of different notes that are tested can be changed by the user to increase or decrease difficulty."
    ],
    links: [ 
      {
        url: "https://github.com/lincolnChoy/PerfectPitchTest",
        name: "Github"
      }
    ],
    portrait: false,
    screenshots: ["Perfect-Pitch-Test/1.png", "Perfect-Pitch-Test/2.png", "Perfect-Pitch-Test/3.png", "Perfect-Pitch-Test/4.png"]
  },
  {
    name: "SwimmyFishy",
    id: "swimmyfishy",
    thumbnail: "SwimmyFishy/1.png",
    techStack: ["Java", "Android Studio"],
    descriptions: [
      "This is an underwater version of the classic game FlappyBird.",
      "An additional mechanic was added to this game which allowed the player to pick up a shield that could protect them from a single collision.",
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/SwimmyFishy",
        name: "Github"
      }
    ],
    portrait: true,
    screenshots: ["SwimmyFishy/1.png", "SwimmyFishy/2.png", "SwimmyFishy/3.png", "SwimmyFishy/4.png", "SwimmyFishy/5.png", "SwimmyFishy/6.png"]
  },
  {
    name: "Portfolio",
    id: "portfolio",
    thumbnail: "Portfolio/1.png",
    techStack: ["JavaScript", "Android Studio"],
    descriptions: [
      "A portfolio website developed with React. Showcases my skills and experience and gives a little insight to who I am."
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/Portfolio",
        name: "Github"
      }
    ],
    portrait: false,
    screenshots: ["Portfolio/1.png", "Portfolio/2.png"]
  }
]

export default projects;