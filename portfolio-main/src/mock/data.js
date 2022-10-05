import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Goran Kukić', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Goran Kukić Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Goran.',
  subtitle: "I'm a Front-End Developer.",
  // title: "Hi, if you're",
  // name: 'here,',
  // subtitle: 'this site is a work in progress.',
  // cta: 'Continue',
};

// SKILLS DATA
// export const skillsData = {
//   frontEnd: {
//     title: 'Front End',
//     stacks: [
//       { name: 'JavaScript', img: 'javascript.png' },
//       { name: 'React', img: 'react.png' },
//       { name: 'Redux', img: 'redux.png' },
//       { name: 'Mapbox', img: 'mapbox.png' },
//       { name: 'Victory', img: 'victory.png' },
//       { name: 'HTML5', img: 'html5.png' },
//       { name: 'CSS3', img: 'css.png' },
//     ],
//     burger: 'burger_topbun.png',
//   },
//   backEnd: {
//     title: 'Back End',
//     stacks: [
//       { name: 'Node', img: 'node.png' },
//       { name: 'Express', img: 'express.png' },
//       { name: 'Sequelize ORM', img: 'sequelize.png' },
//       { name: 'PostgreSQL', img: 'pg.png' },
//       { name: 'RESTful API', img: 'restfulapi.png' },
//       { name: 'Redis', img: 'redis.webp' },
//     ],
//     burger: 'burger_bottombun.png',
//   },
//   tools: {
//     title: 'Tools',
//     stacks: [
//       { name: 'Agile', img: 'agile3.png' },
//       { name: 'Git', img: 'git.png' },
//       { name: 'Heroku', img: 'heroku.png' },
//       { name: 'Travis CI-CD', img: 'travis2.png' },
//       { name: 'PWA', img: 'pwa2.png' },
//       { name: 'Electron', img: 'electron.png' },
//       { name: 'Webpack', img: 'module.png' },
//       { name: 'OAuth', img: 'id.png' },
//     ],
//     burger: 'burger_middle.png',
//   },
// };

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Elevator system',
    videoId: 'RrpQQO2eYv0',
    videoUrl: 'https://youtu.be/RrpQQO2eYv0',
    info:
      'As part of a internship process I was asked to build a basic web application that represents system of 3 elevators in one building. I have decided to do it with React',
    stack: ['React', 'SCSS'],
    url: 'https://gorankukic.github.io/elevators/',
    repo: 'https://github.com/GoranKukic/elevators', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-candy-crush.jpg',
    title: 'Candy Crush Game',
    info:
      'Candy Crush game bulted in React with draggable elements, scoreborad. Checks for combinations of 3 and 4 same elements in column or in row',
    info2: '',
    stack: ['React', 'SCSS'],
    url: 'https://gorankukic.github.io/react-candy-crush/', // if no url, the button will not show up
    repo: 'https://github.com/GoranKukic/react-candy-crush', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-weather-app.jpg',
    title: 'Weather app',
    info:
      'Web app that shows current weather conditions in desired place, dynamicaly changes background due to temperature factor, dynamicaluy adding icon for current weather condition (snow, rain, sunny). As API is used openweathermap.org. Weather icons are dynamicaly pulled also from openweathermap.org. Aplcation is written in React, and styled with SCSS.',
    info2: '',
    stack: ['SCSS', 'React', 'API'],
    url: 'https://gorankukic.github.io/react-weather-app/', // if no url, the button will not show up
    repo: 'https://github.com/GoranKukic/react-weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'company-web-presentation.jpg',
    title: 'Company Landing Page',
    info: 'One Page Company Overview, responsive for desktop, tablet and mobile.',
    info2: '',
    stack: ['SCSS', 'JavaScript'],
    url: 'https://gorankukic.github.io/codingPractice/18-company-web-presentation/code/dist/',
    repo: 'https://github.com/GoranKukic/codingPractice/tree/main/18-company-web-presentation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator.jpg',
    title: 'Calculator',
    info: 'Calculator builted with JavaScript, React. Simple and modern design.',
    info2: '',
    stack: ['JavaScript', 'React'],
    url: 'https://gorankukic.github.io/codingPractice/16-calculator/', // if no url, the button will not show up
    repo: 'https://github.com/GoranKukic/codingPractice/tree/main/16-calculator', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  img: 'profile-photo.png',
  paragraphOne:
    'Before tech, I worked as paralegal in lawyer office, ran few YouTube channels as content creator.',
  paragraphTwo:
    'In 2021, I took a leap and trained Front-End Development via FreeCodeCamp, Udemy, Linkedin Learing. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.',
  paragraphThree:
    "When I'm not coding, I'm spending time with my daughter and wife, cycling, or enjoying in nature walks.",
  resume: 'https://drive.google.com/file/d/1M2dzPt0uaIv8q62BRVXETp1MTeCZEvqx/view?usp=sharing', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch!',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kukicgoran/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GoranKukic',
    },
    {
      id: nanoid(),
      name: 'youtube-play',
      url: 'https://www.youtube.com/channel/UCH9RCgdi60JQ6yOd8u_6bEA',
    },
    {
      id: nanoid(),
      name: 'file',
      url: aboutData.resume,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
