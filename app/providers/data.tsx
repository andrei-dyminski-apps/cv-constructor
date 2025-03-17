import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useMemo,
  useState,
} from 'react';

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
  employment: ['Full-time', 'Remote work'],
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
  experience: [
    {
      period: '09.2022 — now',
      company: 'SWAG 42',
      position: 'Full Stack Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, Nuxt, React, Next.js, Redux, React Query and TypeScript.',
        'Development backend REST API using Node.js, Express.js, Supabase.js, Joi.js and Vitest.js.',
        'Implementation unit tests using Jest.js, integration tests with Vitest, (E2E) tests using Cypress.js.',
        'Integration and management CMS solutions such as Supabase, Strapi, and Directus.',
        'Optimization performance to improve page load speed.',
        'Implementation responsive, adaptive, and cross-browser compatible layouts.',
      ],
      achievements: [
        'Optimized performance to reduce page load speed by 20%, significantly boosting conversion rates.',
        'Implemented testing systems using Jest, Vitest, and Cypress, resulting in a 35% reduction in bugs and enhanced software reliability.',
        'Implemented integration and deployment processes (CI/CD) using Vercel and GitHub Actions, reducing deployment time by 40%.',
      ],
    },
    {
      period: '12.2021 — 08.2022',
      company: 'Imedia Solutions',
      position: 'Frontend Engineer',
      responsibilities: [
        'Development web applications using TypeScript, Vue.js, Vuex, Vue Router and Nuxt.js.',
        'Implementation unit tests using Jest.js, (E2E) tests using Playwright.js.',
        'Working with REST API and SSR (Server-Side Rendering)',
        'Implementation responsive, adaptive, and cross-browser compatible layouts.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
        'Optimization performance of page load speed.',
      ],
      achievements: [],
    },
    {
      period: '07.2017 — 11.2021',
      company: 'New site',
      position: 'Frontend Engineer',
      responsibilities: [
        'Development web applications using React, Redux, React Query, React Router Next.js, Vue.js, Vuex, Vue Router, Nuxt.js and TypeScript.',
        'Creating website layouts and templates for CMS 1C-Bitrix.',
        'Implementation responsive, cross-browser compatible user interfaces.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
        'Optimization performance of page load speed.',
      ],
      achievements: [],
    },
  ],
};

type Options = Record<string, boolean>;

type DataContextType = {
  data: typeof data;
  coreSkills: Options;
  extraSkills: Options;
  setCoreSkills: Dispatch<SetStateAction<Options>>;
  setExtraSkills: Dispatch<SetStateAction<Options>>;
};

export const DataContext = createContext<DataContextType>({
  data,
  coreSkills: {},
  extraSkills: {},
  setCoreSkills: () => {},
  setExtraSkills: () => {},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [coreSkills, setCoreSkills] = useState<Record<string, boolean>>({
    react: true,
    vue: true,
    typescript: true,
  });

  const [extraSkills, setExtraSkills] = useState<Record<string, boolean>>(() =>
    data.skills.extra.reduce(
      (acc, items) => {
        items.forEach((item) => {
          acc[item] = false;
        });
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const filteredData = useMemo(() => {
    const result = JSON.parse(JSON.stringify(data));
    result.skills.core = result.skills.core.filter((skill: string) =>
      Object.entries(coreSkills).some(
        ([key, value]) =>
          Object.keys(coreSkills).every(
            (key) => !skill.toLowerCase().includes(key)
          ) ||
          (value && skill.toLowerCase().includes(key.toLowerCase()))
      )
    );
    result.skills.extra = result.skills.extra
      .map((skills: string[]) => skills.filter((skill) => extraSkills[skill]))
      .filter((skills: string[]) => skills.length);
    return result;
  }, [coreSkills, extraSkills]);

  const value = useMemo(
    () => ({
      data: filteredData,
      coreSkills,
      extraSkills,
      setCoreSkills,
      setExtraSkills,
    }),
    [filteredData, coreSkills, extraSkills]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
