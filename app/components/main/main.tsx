import { ExperienceList } from '~/components/main/experience-list';
import { useData } from '~/hooks/data';

export const Main = () => {
  const { personal } = useData();
  return (
    <div className="flex flex-col gap-1 border border-gray-300 px-5 py-4">
      <h1 className="text-2xl leading-none font-bold uppercase">
        {personal.name}
      </h1>
      <ExperienceList />
    </div>
  );
};
