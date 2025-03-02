import { useData } from '~/hooks/data';

export const Avatar = () => {
  const { personal } = useData();
  return (
    <>
      <img
        src={personal.avatar}
        alt={personal.name}
        className="mx-auto my-4 w-28 rounded-2xl shadow-2xl"
      />
    </>
  );
};
