import { useData } from '~/hooks/data';

export const Avatar = () => {
  const { personal } = useData();
  return (
    <>
      <img
        src={personal.avatar}
        alt={personal.name}
        className="my-4 mx-auto rounded-2xl w-32"
      />
    </>
  );
};
