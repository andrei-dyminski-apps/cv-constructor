import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { Bullet } from '~/components/bullet';

export const Employment = () => {
  const { employment } = useData();
  return (
    <>
      <AsideSection name="Employment">
        <ul className="flex flex-col gap-1">
          {employment.map((value, index) => (
            <li key={index} className="flex items-center gap-2">
              <Bullet />
              {value}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
