import { Bullet } from '~/components/bullet';

export const List = ({ list }: { list: string[] }) => {
  return (
    <ul className="flex flex-col gap-0.5">
      {list.map((value, index) => (
        <li key={index} className="flex gap-2">
          <Bullet className="mt-2" />
          <div className="">{value}</div>
        </li>
      ))}
    </ul>
  );
};
