import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { Bullet } from '~/components/bullet';

export const ExtraSkills = () => {
  const { skills } = useData();
  return (
    <>
      <AsideSection name="Extra Skills">
        <ul className="flex flex-col gap-1">
          {skills.extra.map((list, index) => (
            <li key={index} className="flex items-center gap-2">
              <Bullet /> {list.join(', ')}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
