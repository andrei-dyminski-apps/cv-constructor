import type { ChangeEvent } from 'react';

export const Checkbox = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="-m-1 flex cursor-pointer items-center gap-2 p-1 hover:underline">
      <input
        type="checkbox"
        value={label}
        checked={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
