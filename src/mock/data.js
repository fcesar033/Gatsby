import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Federico Cesar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '¡Hola! soy ',
  name: 'Federico Cesar',
  subtitle: 'FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Me apasiona la tecnología, y tengo mucha ambición por crecer personal y profesionalmente. Soy responsable, atento, honesto y por sobre todo colaborador. Me considero un gran profesional a la hora de trabajar en equipo y poder desempeñar mi rol según las necesidades del mismo.',
  paragraphTwo: 'Comence mi trayecto como desarrollador en 2019 en Acámica. La carrera de Desarrollador Web Full Stack se centro principalmente en generar las bases de conocimiento de HTML5, CSS3 y JS, como asi tambien los fundamentos y principios de NodeJS y MySQL.',
  paragraphThree: 'Por mi cuenta con el tiempo me propuse expander mis conocimientos logrando desarrollarme profesionalmente en lenguajes como PL/SQL, APEX, y Python entre otros. Como asi tambien lograr dominar herramientas como GIT.',
  resume: 'https://fcesar033.github.io/resume/CV-FedericoCesar.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bmo.jpeg',
    title: 'Puzzle Game',
    info: 'Fue uno de mis primeros proyectos',
    info2: '',
    url: '',
    repo: 'https://fcesar033.github.io/PuzzleGame/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pixelart.jpeg',
    title: 'Pixel Art',
    info: 'Tecnicas Js',
    info2: '',
    url: '',
    repo: 'https://fcesar033.github.io/Pixel-Art/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'fcesar.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_fedecesar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/federicocesar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/fcesar033',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
