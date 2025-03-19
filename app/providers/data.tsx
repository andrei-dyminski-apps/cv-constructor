import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useMemo,
  useState,
} from 'react';

type Experience = {
  period: string;
  company: string;
  position: string;
  responsibilities: string[];
  achievements: string[];
};

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
  about_me: `
    I am a results-oriented Front-End Engineer with over seven years of experience in developing and optimizing high-performance web applications.
    <div class="my-1.5"/>
    Passionate about continuous learning and professional growth, I am committed to exceeding expectations through excellence in development, communication, and collaboration. My ability to work effectively with teams ensures successful project completion on time and within budget.
    <div class="my-1.5"/>
    I have a proven track record of delivering measurable results, including:
    <div class="my-1.5"/>
  `,
  experience: [
    {
      period: '09.2022 — now',
      company: 'SWAG 42',
      position: 'Full Stack Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, and Nuxt.',
        'Building and refactoring web applications using React, Next.js, Redux, and React Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Developing backend REST APIs using Node.js, Express.js, Supabase.js, Joi.js, and Vitest.js.',
        'Implementing unit tests with Jest.js, integration tests with Vitest, and end-to-end (E2E) tests using Cypress.js.',
        'Integrating and managing CMS solutions such as Supabase, Strapi, and Directus.',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
      ],
      achievements: [
        'Optimized performance, reducing page load speed by 20% and significantly boosting conversion rates.',
        'Implemented testing systems using Jest, Vitest, and Cypress, achieving a 35% reduction in bugs and enhancing software reliability.',
        'Developed and streamlined CI/CD processes using Vercel and GitHub Actions, cutting deployment time by 40%.',
      ],
    },
    {
      period: '12.2021 — 08.2022',
      company: 'Imedia Solutions',
      position: 'Frontend Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Vuex, Vue Router, and Nuxt.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Implementing unit tests using Jest.js and end-to-end (E2E) tests with Playwright.js.',
        'Working with REST APIs and Server-Side Rendering (SSR).',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
        'Optimizing performance to enhance page load speed.',
      ],
      achievements: [],
    },
    {
      period: '07.2017 — 11.2021',
      company: 'New site',
      position: 'Frontend Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, and Nuxt.',
        'Building and refactoring web applications using React, Next.js, Redux, and React Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Creating website layouts and templates for the 1C-Bitrix CMS.',
        'Implementing responsive, cross-browser-compatible user interfaces.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
        'Optimizing performance to enhance page load speed.',
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

  const filterByCoreSkills = (data: string[]) =>
    data.filter((skill: string) =>
      Object.entries(coreSkills).some(
        ([key, value]) =>
          Object.keys(coreSkills).every(
            (key) => !skill.toLowerCase().includes(key)
          ) ||
          (value && skill.toLowerCase().includes(key.toLowerCase()))
      )
    );

  const filteredData = useMemo(() => {
    const result = JSON.parse(JSON.stringify(data));

    result.skills.core = filterByCoreSkills(result.skills.core);

    result.skills.extra = result.skills.extra
      .map((skills: string[]) => skills.filter((skill) => extraSkills[skill]))
      .filter((skills: string[]) => skills.length);

    result.experience = result.experience.map((item: Experience) => ({
      ...item,
      responsibilities: filterByCoreSkills(item.responsibilities),
    }));

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
