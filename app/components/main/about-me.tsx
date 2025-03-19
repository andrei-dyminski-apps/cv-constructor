import { MainSection } from '~/components/main/main-section';
import { useData } from '~/hooks/data';
import { List } from '~/components/list';

export const AboutMe = () => {
  const { data } = useData();
  return (
    <MainSection name="About me" icon="profile">
      <p dangerouslySetInnerHTML={{ __html: data.about_me }}></p>
      <List
        items={data.experience.map(({ achievements }) => achievements).flat(1)}
      />
    </MainSection>
  );
};
