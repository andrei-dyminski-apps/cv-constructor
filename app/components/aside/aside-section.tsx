import type { ReactNode } from 'react';

export const AsideSection = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <div className="">
      <div className="bg-blue-950 px-4 py-3 font-bold uppercase">{name}</div>
      <div className="px-4 py-3 text-sm">{children}</div>
    </div>
  );
};
