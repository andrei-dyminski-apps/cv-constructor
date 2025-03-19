import { MainSection } from '~/components/main/main-section';
import { useData } from '~/hooks/data';

export const AboutMe = () => {
  const { data } = useData();
  return (
    <MainSection name="About me" icon="profile">
      <p dangerouslySetInnerHTML={{ __html: data.about_me }}></p>
    </MainSection>
  );
};
