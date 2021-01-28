const projects = [
  {
    name: "Portfolio",
    thumbnail: "placeholder.jpg",
    brief: "The portfolio website you are currently looking at.",
    descriptions: [
      "A portfolio website developed with React. Showcases my skills and experience",
      "and gives a little insight to who I am."
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/Portfolio",
        name: "Github"
      }
    ],
    portrait: false,
    screenshots: []
  },
  {
    name: "Smart Diet Diary",
    thumbnail: "placeholder.jpg",
    brief: "A mobile application used to track your diet. Uses AI to detect and identify foods in a picture.",
    descriptions: [
      "A Diet diary for the mobile platform developed in hopes of making diet tracking more convenient and helpful.",
      "The Smart Diet Diary was developed using the react-native JavaScript framework for the front-end",
      "mobile application, and the CherryPy Python framework for the back-end server. The food detection and calorie",
      "estimation take place on the back-end server and was achieved using the TensorFlow Object Detection API. An existing",
      "model called the faster_rcnn_inception_v2_coco was retrained using a new dataset with images collected using an everyday smartphone."
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/Smart-Diet-Diary",
        name: "Github"
      }
    ],
    portrait: true,
    screenshots: []
  },
  {
    name: "Pacmana Jones",
    thumbnail: "Pacman/1.png",
    brief: "A Pacman java game that parodies Indiana Jones.",
    descriptions: [
      "A modified version of pacman where Indiana Jones has become Pacman.",
      "The player will need to collect artifacts and avoid the ghosts in the maze.",
      "The special pellets grants the player the ability to whip enemies instead of the ability to eat them.",
      "This game was developed with Eclipse in Java and JavaFX.",
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
    thumbnail: "placeholder.jpg",
    brief: "A web application used to train your ears to determine what note is being played.",
    descriptions: [
      "A web application that allows the user to test their ability to identify which music note is",
      "being played and train their perfect pitch. The number of different notes that are tested can",
      "be changed by the user to increase or decrease difficulty. Developed with a React front-end.",
    ],
    links: [ 
      {
        url: "https://github.com/lincolnChoy/PerfectPitchTest",
        name: "Github"
      }
    ],
    portrait: false,
    screenshots: []
  },
  {
    name: "SwimmyFishy",
    thumbnail: "SwimmyFishy/1.png",
    brief: "A mobile game like FlappyBird but underwater.",
    descriptions: [
      "This is an underwater version of the classic game FlappyBird.",
      "An additional mechanic was added to this game which allowed the player to pick up",
      "a shield that could protect them from a single collision.",
      "The application was developed in Android Studio.",
    ],
    links: [ 
      {
        url: "https://github.com/HenrygShen/SwimmyFishy",
        name: "Github"
      }
    ],
    portrait: true,
    screenshots: ["SwimmyFishy/1.png", "SwimmyFishy/2.png", "SwimmyFishy/3.png", "SwimmyFishy/4.png", "SwimmyFishy/5.png", "SwimmyFishy/6.png"]
  }
]

export default projects;