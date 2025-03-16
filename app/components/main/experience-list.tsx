import { MainSection } from '~/components/main/MainSection';
import { useData } from '~/hooks/data';
import { ExperienceItem } from '~/components/main/experience-item';

export const ExperienceList = () => {
  const { data } = useData();
  return (
    <MainSection name="Experience">
      <ul className="flex flex-col gap-2">
        {data.experience.map((item, index) => (
          <li key={index}>
            <ExperienceItem {...item} />
            {index < data.experience.length - 1 && (
              <div className="mx-36 mt-2.5 border-b border-blue-900" />
            )}
          </li>
        ))}
      </ul>
    </MainSection>
  );
};
