import { Bullet } from '~/components/bullet';

export const List = ({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) => {
  return (
    <ul className={`flex flex-col gap-0.5 ${className}`}>
      {items.map((value, index) => (
        <li key={index} className="flex gap-2">
          <Bullet className="mt-2" />
          <div className="">{value}</div>
        </li>
      ))}
    </ul>
  );
};
