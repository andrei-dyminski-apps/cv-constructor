import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
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
    linkedin: 'https://linkedin.com/in/andrei-dyminski-4a9508202/',
    github: 'https://github.com/andrei-dyminski-apps',
    email: 'mailto:andrei.dyminski@gmail.com',
    phone: 'tel:+48 573 098 898',
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
      ['Axios', 'REST-API'],
      ['Cypress', 'Jest', 'Vitest', 'Playwright'],
      ['Element plus', 'Vuetify', 'Antd'],
      ['Node', 'Express', 'Joi', 'JWT'],
      ['Python'],
      ['CI/CD', 'Vercel', 'GitHub Actions'],
      ['1С-Bitrix', 'Strapi', 'Supabase', 'Directus', 'Wordpress'],
      ['JQuery', 'Bootstrap'],
    ],
  },
  about_me: `
    I am a results-oriented Front-End Engineer with over seven years of experience in developing and optimizing high-performance web applications.
    <div class="my-1.5"/>
    Passionate about continuous learning and professional growth, I am committed to exceeding expectations through excellence in development, communication, and collaboration. My ability to work effectively with teams ensures successful project completion on time and within budget.
    <div class="my-1.5"/>
    I have experience providing code review and mentoring junior developers, helping them improve their technical skills and solve problems.
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
        'Optimized performance, reducing page load speed by 30% and significantly boosting conversion rates.',
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
  selectedAllExtraSkills: boolean;
  toggleAllExtraSkills: (value: boolean) => void;
  setCoreSkills: Dispatch<SetStateAction<Options>>;
  setExtraSkills: Dispatch<SetStateAction<Options>>;
};

export const DataContext = createContext<DataContextType>({
  data,
  coreSkills: {},
  extraSkills: {},
  selectedAllExtraSkills: false,
  toggleAllExtraSkills: () => {},
  setCoreSkills: () => {},
  setExtraSkills: () => {},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [coreSkills, setCoreSkills] = useState<Record<string, boolean>>({
    react: false,
    vue: true,
  });
  const activeCoreSkills = Object.entries(coreSkills)
    .filter(([_, status]) => status)
    .map(([skill]) => skill);

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

  const [selectedAllExtraSkills, setSelectedAllExtraSkills] = useState(
    Object.values(extraSkills).every(Boolean)
  );
  const toggleAllExtraSkills = (value: boolean) => {
    Object.keys(extraSkills).forEach((key) => (extraSkills[key] = value));
    setSelectedAllExtraSkills(value);
  };
  useEffect(() => {
    setSelectedAllExtraSkills(Object.values(extraSkills).every(Boolean));
  }, [extraSkills]);

  const filterByCoreSkills = (entries: string[]) => {
    const coincidences = entries.filter((entry) =>
      activeCoreSkills.some((skill) => entry.toLowerCase().includes(skill))
    );
    if (!coincidences.length) return entries;
    return entries.filter(
      (entry) =>
        !Object.keys(coreSkills).some((skill) =>
          entry.toLowerCase().includes(skill)
        ) ||
        activeCoreSkills.some((skill) => entry.toLowerCase().includes(skill))
    );
  };

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
      selectedAllExtraSkills,
      toggleAllExtraSkills,
      setCoreSkills,
      setExtraSkills,
    }),
    [filteredData, coreSkills, extraSkills, selectedAllExtraSkills]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
