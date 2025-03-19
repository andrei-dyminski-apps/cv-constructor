import { AsideSection } from '~/components/aside/aside-section';
import { useData } from '~/hooks/data';
import { SvgIcon } from '~/components/svg-icon';

export const Contacts = () => {
  const { data } = useData();
  return (
    <>
      <AsideSection name="Contacts">
        <ul className="flex flex-col gap-2">
          {Object.entries(data.contacts).map(([key, value]) => (
            <li key={key} className="flex items-center gap-2">
              <SvgIcon name={key} className="h-4 w-4 fill-white" /> {value}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
