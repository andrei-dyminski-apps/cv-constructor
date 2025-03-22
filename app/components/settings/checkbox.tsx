import { type KeyboardEvent, useRef } from 'react';
import type { CheckboxEvent } from '~/types/checkbox';

export const Checkbox = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (e: CheckboxEvent) => void;
}) => {
  const input = useRef<HTMLInputElement | null>(null);

  const handleToggle = () => onChange({ label, value: !value });

  const handleKeyDown = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (['Enter', 'Space'].includes(e.code)) {
      e.stopPropagation();
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <label
      className="-m-1 flex cursor-pointer items-center gap-2 p-1 hover:underline"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={input}
        type="checkbox"
        value={label}
        checked={value}
        tabIndex={-1}
        onChange={handleToggle}
      />
      <span>{label}</span>
    </label>
  );
};
