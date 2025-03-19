import { SvgIcon } from '~/components/SvgIcon';

export const Button = ({
  icon,
  onClick,
}: {
  icon: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className="flex h-10 w-10 cursor-pointer rounded-lg border duration-300 hover:bg-black hover:text-white"
      onClick={onClick}
    >
      <SvgIcon name={icon} className="m-auto h-5 w-5" />
    </button>
  );
};
