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
            <li key={key}>
              {['github', 'linkedin', 'email', 'phone'].includes(key) ? (
                <a
                  href={value.replace(/\s/g, '')}
                  target="_blank"
                  className="flex w-full items-center gap-2 hover:underline"
                  rel="noreferrer"
                >
                  <SvgIcon name={key} className="h-4 w-4 fill-white" />
                  <span className="truncate">
                    {value.replace(/(mailto|tel):|https:\/\//g, '')}
                  </span>
                </a>
              ) : (
                <div className="flex w-full items-center gap-2 truncate">
                  <SvgIcon name={key} className="h-4 w-4 fill-white" />
                  <span className="truncate">{value}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
