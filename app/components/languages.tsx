import { AsideSection } from '~/components/aside-section';
import { useData } from '~/hooks/data';

export const Languages = () => {
  const { languages } = useData();
  const levels = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];

  const getLevel = (value: number) => levels[value - 1];

  return (
    <>
      <AsideSection name="Languages">
        <ul className="flex flex-col gap-2 py-1">
          {Object.entries(languages).map(([key, value]) => (
            <li key={key} className="flex items-start gap-2">
              <div className="leading-3 capitalize">{key}</div>
              <div className="ml-auto flex flex-col items-end gap-1">
                <ul className="flex gap-2">
                  {levels.map((_, index) => (
                    <li
                      key={index}
                      className={`h-3.5 w-3.5 rounded-full bg-white ${index < value ? 'opacity-100' : 'opacity-25'}`}
                    />
                  ))}
                </ul>
                <div className="text-xs">{getLevel(value)}</div>
              </div>
            </li>
          ))}
        </ul>
      </AsideSection>
    </>
  );
};
