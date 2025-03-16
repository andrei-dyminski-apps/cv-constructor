import { ExperienceList } from '~/components/main/experience-list';
import { useData } from '~/hooks/data';

export const Main = () => {
  const { data } = useData();
  return (
    <div className="flex flex-col gap-1 px-5 py-4">
      <h1 className="text-2xl leading-none font-bold uppercase">
        {data.personal.name}
      </h1>
      <ExperienceList />
    </div>
  );
};
