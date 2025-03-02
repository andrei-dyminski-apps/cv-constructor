import type { ReactNode } from 'react';
import { SvgIcon } from '~/components/SvgIcon';

export const MainSection = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-2">
      <header className="flex items-center gap-4 text-blue-900">
        <h2 className="font-bold uppercase">{name}</h2>
        <div className="min-w-0 grow border-b"></div>
        <div className="flex h-10 w-10 rounded-full border">
          <SvgIcon name={name} className="m-auto h-5 w-5" />
        </div>
      </header>
      <div>{children}</div>
    </section>
  );
};
