import {writable} from 'svelte/store';

export let projects = [
  {
    title: 'SocialMedia-App',
    repo: 'http://github.com/sidjaiswal2003',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' ReactJS',
      ' NodeJS',
      ' ExpressJS',
      ' MongoDB'
    ],
    desc: 'Full stack social media website.',
    pre: '',
    maintainers: ['sidjaiswal2003']
  },
  {
    title: 'GitFest',
    repo: 'https://github.com/sohan2410/GitFest',
    stack: [' Documentation'],
    desc: 'Git for beginners.',
    pre: '',
    maintainers: ['sohan2410']
  },
  {
    title: 'AASF-API',
    repo: 'https://github.com/sohan2410/aasf-api',
    stack: ['TypeScript', ' NodeJS', ' ExpressJS', ' SQL'],
    desc: 'Backend for AASF App',
    pre: '',
    maintainers: ['sohan2410']
  },
  {
    title: 'MediChain',
    repo: 'https://sadityakumar9211/medichain-hardhat',
    stack: ['JavaScript', ' TypeScript', ' Bash', ' Solidity', ' ReactJS', ' NextJS'],
    desc: 'A decentralized telecommunication and medical health record system on EVM compatible chains. Featuring DAO for inclusion of patients in governance.',
    pre: '',
    maintainers: ['sadityakumar9211']
  },
  {
    title: 'CoinKeeper',
    repo: 'https://github.com/joeyyy09/CoinKeeper-Expense-Tracker',
    stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB', 'HTML', 'CSS', 'ReactJS'],
    desc: 'This is an expense tracker website built using ReactJS, MongoDB, NodeJS, Express, and styled using Styled Components.',
    pre: '',
    maintainers: ['joeyyy09']
  },
  {
    title: 'Kankan Board',
    repo: 'https://github.com/joeyyy09/kanban-board',
    stack: ['JavaScript', ' HTML', ' CSS', ' NodeJS', ' ExpressJS', ' MongoDB', ' Documentation'],
    desc: 'Efficiently manage your tasks with this stylish Kanban board web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application enables users to seamlessly organize tasks by adding, deleting, editing, and effortlessly dragging tasks between columns: To Do, In Progress, and Completed.',
    pre: '',
    maintainers: ['joeyyy09']
  },
  {
    title: 'FoodFiesta',
    repo: 'https://github.com/joeyyy09/FoodFiesta',
    stack: ['JavaScript', ' NodeJS', ' ExpressJS', ' MongoDB', ' HTML', ' CSS', ' ReactJS', ' Firebase', ' Documentation'],
    desc: 'This is a food delivery website built using ReactJS, Tailwind CSS, NodeJS, Firebase, Express, REST APIs, Redux, and authentication implemented using Google authentication. Users can browse through a variety of food items, add them to cart, and place an order. Administrators can add new dishes to the menu as well.',
    pre: '',
    maintainers: ['joeyyy09']
  },
  {
    title: 'MediBook',
    repo: 'https://github.com/Ishpreet-Kaur-Bedi/Hospital-Booking-Medibook',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
      ' Node.js',
      ' Express.js',
      ' MongoDB',
      ' Typescript'
    ],
    desc: 'The Hospital Booking Platform is an innovative and user-friendly application that revolutionizes the way patients and doctors connect.  With our platform, patients can easily book appointments with their preferred hospitals and doctors, while doctors can efficiently manage their hospital listings and reservations.',
    pre: 'ReactJS, NextJS, Javascript',
    maintainers: ['Ishpreet-Kaur-bedi']
  },
  {
    title: 'TomperChat',
    repo: 'https://github.com/varunKT001/tomper-chat',
    stack: ['JavaScript',
    ' React',
    ' Node.js',
    ' Express.js',
    ' MongoDB',],
    desc:
      'A full-fleged whatsapp clone.',
    pre: '',
    maintainers: ['varunKT001']
  },
  {
    title: 'QuickLy Live Chat App',
    repo: 'https://github.com/HiRoaR2002/Quickly-Backend',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' NodeJS',
      ' ReactJS',
      ' ExpressJS',
      ' MongoDB',
    ],
    desc: 'It is a live chat app like whatsapp, providing many features.',
    pre: '',
    maintainers: ['HiRoaR2002']
  },
  {
    title: 'Video Social',
    repo: 'https://github.com/sadityakumar9211/travel-site-frontend',
    stack: [
      'JavaScript',
      ' HTML',
      ' CSS',
      ' React',
    ],
    desc: 'This is a basic frontend project for a sample travel site.',
    maintainers: ['sadityakumar9211']
  },
  {
    title: 'Video Calling Web App',
    repo: 'https://github.com/Spedrick/webRTC-server',
    stack: ['JavaScript', ' NodeJS', 'Typescript', 'React Native', 'Firebase', 'CSS', 'ReactJS', 'Angular', 'Vue', 'Documentation', ],
    desc: 'WebRTC server using peer.js',
    pre: 'Basics of Web Development',
    maintainers: ['Spedrick']
  },
  {
    title: 'Android Gallery App',
    repo: 'https://github.com/Spedrick/Gallery',
    stack: ['Dart', ' Java', 'Flutter', 'React Native', 'Kotlin', 'PostgresSQL', 'SQL', 'Firebase','Documentation', ],
    desc: 'An Android Project for gallery using flickr/Pexels API',
    pre: 'Any Android tech stack',
    maintainers: ['Spedrick']
  },
  {
    title: 'Jennifer - Personal Voice Assistant',
    repo: 'https://github.com/Spedrick/Jennifer---Speech-Assistant',
    stack: ['Python', ' Django', 'Flask', 'MongoDB', 'PostgresSQL', 'SQL', 'Firebase', 'Documentation', ],
    desc: 'Jennifer is a voice commanding assistant service in Python 3.5+ It can recognize human speech, talk to user and execute basic commands.',
    pre: '',
    maintainers: ['Spedrick']
  },
  {
    title: 'Daily-Sync',
    repo: 'https://github.com/joeyyy09/Daily-Sync',
    stack: ['Dart', 'Firebase', 'Documentation', ],
    desc: 'A To-Do daily planner',
    pre: '',
    maintainers: ['joeyyy09']
  }
];

export const pstringify = () => {
  projects.forEach(p => {
    p.pstr = p.title + ' ' + p.desc + ' ';
    p.stack.forEach(s => (p.pstr += s + ' '));
    p.maintainers.forEach(m => (p.pstr += m + ' '));
  });
};

export const searchQueryStore = writable('');

export const search = () => {
  let q = '';
  searchQueryStore.subscribe(data => (q = data.toLowerCase()));
  let keywords = q.split(' ');
  let results = [];
  keywords.forEach(keyword => {
    if (q == '' || keyword !== '') {
      results = results.concat(
        projects.filter(p => p.pstr.toLowerCase().includes(keyword))
      );
    }
  });

  let resultSet = new Set();

  results.forEach(r => {
    resultSet.add(r);
  });
  return Array.from(resultSet);
};
