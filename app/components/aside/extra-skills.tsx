import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { List } from '~/components/list';

export const ExtraSkills = () => {
  const { data } = useData();
  return (
    <>
      <AsideSection name="Extra Skills">
        <List
          items={data.skills.extra.map((list) => list.join(', '))}
          className="gap-2"
        />
      </AsideSection>
    </>
  );
};
