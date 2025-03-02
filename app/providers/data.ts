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
    core: [
      'HTML5, CSS3, JS (ES6+)',
      'Vue, Vuex, Vue Router, Pinia, Nuxt',
      'React, Redux, React Router, Next',
      'TypeScript',
    ],
    extra: [
      ['Webpack', 'Gulp', 'Grunt', 'Vite'],
      ['Tailwindcss', 'Sass', 'Less'],
      ['Cypress', 'Jest', 'Vitest', 'Playwright'],
      ['Element plus', 'Vuetify', 'Antd'],
      ['Node', 'Express', 'Joi', 'JWT'],
      ['1С-Bitrix', 'Strapi', 'Supabase', 'Directus', 'Wordpress'],
      ['JQuery', 'Bootstrap'],
    ],
  },
};

export const DataContext = createContext(data);
