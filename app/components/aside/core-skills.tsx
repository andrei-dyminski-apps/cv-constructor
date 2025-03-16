import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { Bullet } from '~/components/bullet';

export const CoreSkills = () => {
  const { data } = useData();
  return (
    <>
      <AsideSection name="Core Skills">
        <ul className="flex flex-col gap-2">
          {data.skills.core.map((value) => (
            <li key={value} className="flex items-center gap-2">
              <Bullet /> {value}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
