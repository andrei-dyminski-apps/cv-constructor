import { MainSection } from '~/components/main/main-section';
import { useData } from '~/hooks/data';
import { ExperienceItem } from '~/components/main/experience-item';

export const ExperienceList = () => {
  const { data } = useData();
  return (
    <MainSection name="Experience" icon="experience">
      <ul className="flex flex-col gap-2">
        {data.experience.map((item, index) => (
          <li key={index}>
            <ExperienceItem {...item} />
            {index < data.experience.length - 1 && (
              <div className="mx-36 mt-3 mb-0.5 border-b border-blue-900" />
            )}
          </li>
        ))}
      </ul>
    </MainSection>
  );
};
