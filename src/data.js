//  icons
import {
  FiGithub,
  // FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  // FiTag,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/house-place.jpg';
import Project2 from './assets/img/projects/NASA.jpg';
import Project3 from './assets/img/projects/ReconAi.png';
// import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/Napo.jpeg';
import Project6 from './assets/img/projects/Math.jpg';
import Project7 from './assets/img/projects/p7.jpg';
import Project8 from './assets/img/projects/Responsive.jpg';
import Project9 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
// import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
// import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
// import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/busaryoh',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/hokageCodes',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/busayo-ogunde-b606a812a/',
  },
  // {
  //   icon: <FiDribbble />,
  //   href: '',
  // },
];


// projects
export const projectsData = [
  {
    id: '3',
    image: Project3,
    name: 'Reconcile AI',
    category: 'React JS',
    description: 'Reconcile.AI is a web application that compares third-party and independent financial statements and records with internal financial records and ledgers. It does this accurately with artificial intelligence from Open AI and machine learning models like GPT-3. Reconcile.AI makes the day-to-day balancing of accounts and sales easier, faster, and very reliable for Small and Medium Enterprises.',
    href: 'https://reconcileai.com'
  },
  {
    id: '1',
    image: Project1,
    name: 'Hokage-bnb',
    category: 'React JS',
    description: 'A house listing market place where you can put up your house for rent or sale, or view other houses for rent or sale. Signup (email or google) and explore!',
    href: 'https://hokage-bnb.vercel.app/'
  },
  {
    id: '2',
    image: Project2,
    name: 'NASAssistic',
    category: 'HTML | CSS | JS',
    description: 'The Universe is vast and wide, and there are so many things we dont know about it. BUT! There are things we DO know. This project, built using realtime data from NASA\'s API shows us most of these information about our universe, available to us.',
    href: 'https://nasassistic.netlify.app/'
  },
  // {
  //   id: '4',
  //   image: Project4,
  //   name: 'project name 4',
  //   category: 'Low/No-code',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam obcaecati ipsam.'
  // },
  {
    id: '5',
    image: Project5,
    name: 'Quotes Hub',
    category: 'HTML | CSS | JS',
    description: 'Everyone loves a good motivational or life quote. It makes us feel good, and keeps us motivated. If you love such, you\'d love this project. If you don\'t like quotes before now, Youd love this project too! Enjoy!',
    href: 'https://quoteshub.netlify.app/'
  },
  {
    id: '6',
    image: Project6,
    name: 'We Hate Math, dont we?',
    category: 'HTML | CSS | JS',
    description: 'Okay, okay, I hear what you are saying. And i think we can all agree - NOBODY likes math 😂 - But this is a fun, easy one i promise! I dare you, take a MATH test today!😈',
    href: 'https://wehatemath.netlify.app/'

  },
  {
    id: '7',
    image: Project7,
    name: '404 Not Found Page',
    category: 'Responsive Web Design',
    description: 'We\'ve all encountered a 404 error before. It means the page on the site you are trying to visit does NOT exist. Here is a beautifully designed 404 page made from an online challenge',
    href: 'https://error-404notfound.netlify.app/'
  },
  {
    id: '8',
    image: Project8,
    name: 'Cheesecake Recipe',
    category: 'Responsive Web Design',
    description: 'Ever wondered how to make cheesecake? Well, This is a cheese cake recipe you. You can even view on your phone for ease!',
    href: 'https://recipe-cheese.netlify.app/'
  },
  {
    id: '9',
    image: Project9,
    name: 'project name 9',
    category: 'React JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam obcaecati ipsam.'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React JS', // Formerly UI/UX DESIGN
  },
  {
    name: 'Responsive Web Design', // Formerly Responsive Web Design
  },
  {
    name: 'HTML | CSS | JS', // Fomerly Web Development
  },
  // {
  //   name: 'Low/no-code', // Fomerly Low/ No code
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Ui Design & Ux Research',
    description:
      'Designing websites and products with our clients or target audience in mind, using best practices and the latest tools to create a seamless experience.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I convert designs, ideas and interactions to real experiences.',
  },
  {
    icon: <FiPenTool />,
    name: 'Low/No-code',
    description:
      'Clients on a budget arent left out! By Using the best low/no code tools (e.g Wordpress, Bubble), I can help you design and build a brand or a blog you would be proud of.',
  },
  // {
  //   icon: <FiTag />,
  //   name: 'Personal Training',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
// ];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Got a question? Or you wanna hire?',
    subtitle: 'I am here to help you.',
    description: 'Email me at ogundebusayo@yahoo.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Lagos, Nigeria',
    description: 'Code. Coffee. Chakra',
  },
];


