import { useData } from '~/hooks/data';

export const Avatar = () => {
  const { data } = useData();
  return (
    <>
      <img
        src={data.personal.avatar}
        alt={data.personal.name}
        className="mx-auto my-4 w-28 rounded-2xl"
      />
    </>
  );
};
