import { createContext } from 'react';

export const data = {
  personal: {
    avatar: '/assets/images/avatar.jpg',
    name: 'Andrei Dyminski',
  },
  contacts: {
    email: 'andrei.dyminski@gmail.com',
    phone: '+48 573 098 898',
    location: 'Poland, Bialystok',
  },
  languages: {
    russian: 6,
    english: 4,
  },
  skills: {
    primary: [
      {
        name: 'HTML5, CSS3, JS (ES6+)',
        level: 5,
      },
      {
        name: 'Vue, Vuex, Vue Router, Pinia, Nuxt',
        level: 4,
      },
      {
        name: 'React, Redux, React Router, Next',
        level: 4,
      },
      {
        name: 'TypeScript',
        level: 5,
      },
    ],
    advanced: [
      'Element plus',
      'Vuetify',
      'Antd',
      'Tailwindcss',
      'Bootstrap',
      'Sass',
      'Less',
      'Webpack',
      'Gulp',
      'Grunt',
      'Vite',
      'Node',
      'Express',
      'Joi',
      'JWT',
      'Cypress',
      'Jest',
      'Vitest',
      'Playwright',
      '1С-Bitrix',
      'Strapi',
      'Supabase',
      'Directus',
      'Wordpress',
      'JQuery',
    ],
  },
};

export const DataContext = createContext(data);
