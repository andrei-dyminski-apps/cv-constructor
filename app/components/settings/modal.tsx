import type { ReactNode } from 'react';
import { SvgIcon } from '~/components/SvgIcon';

export const Modal = ({
  isOpen,
  title,
  children,
  onToggle,
}: {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onToggle: () => void;
}) => {
  return (
    <section
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-50 flex h-full w-1/4 flex-col bg-white shadow-2xl duration-300`}
    >
      {isOpen && (
        <>
          <header className="flex items-center justify-between gap-6 border-b border-gray-400 px-5 py-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              className="-m-2.5 flex h-10 w-10 cursor-pointer"
              type="button"
              onClick={onToggle}
            >
              <SvgIcon name="close" className="m-auto h-5 w-5" />
            </button>
          </header>
          <div className="grow overflow-y-auto px-5 py-3">{children}</div>
        </>
      )}
    </section>
  );
};
