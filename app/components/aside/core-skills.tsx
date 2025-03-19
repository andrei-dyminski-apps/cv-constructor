import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { List } from '~/components/list';

export const CoreSkills = () => {
  const { data } = useData();
  return (
    <>
      <AsideSection name="Core Skills">
        <List items={data.skills.core} className="gap-2" />
      </AsideSection>
    </>
  );
};
