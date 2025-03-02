import { AsideSection } from '~/components/aside-section';
import { useData } from '~/hooks/data';
import { SvgIcon } from '~/components/SvgIcon';

export const Contacts = () => {
  const { contacts } = useData();
  return (
    <>
      <AsideSection name="Contacts">
        <ul className="flex flex-col gap-2">
          {Object.entries(contacts).map(([key, value]) => (
            <li key={key} className="flex items-center gap-2">
              <SvgIcon name={key} className="w-5 h-5 fill-white" /> {value}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
