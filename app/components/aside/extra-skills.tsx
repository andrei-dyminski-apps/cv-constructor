import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { Bullet } from '~/components/bullet';

export const ExtraSkills = () => {
  const { data } = useData();
  return (
    <>
      <AsideSection name="Extra Skills">
        <ul className="flex flex-col gap-2">
          {data.skills.extra.map((list, index) => (
            <li key={index} className="flex items-center gap-2">
              <Bullet /> {list.join(', ')}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
