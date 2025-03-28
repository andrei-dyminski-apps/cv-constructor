import { ExperienceList } from '~/components/main/experience-list';
import { useData } from '~/hooks/data';
import { AboutMe } from '~/components/main/about-me';

export const Main = () => {
  const { data, coreSkills } = useData();
  return (
    <div className="relative flex flex-col gap-1 px-5 py-4">
      <h1 className="text-2xl leading-none font-bold uppercase">
        {data.personal.name}
      </h1>
      <ExperienceList />
      <div
        className={
          Object.values(coreSkills).filter(Boolean).length < 3
            ? 'absolute top-[300mm] left-0 w-full px-5'
            : ''
        }
      >
        <AboutMe />
      </div>
    </div>
  );
};
