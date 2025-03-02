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
      <div className="bg-blue-950 px-5 py-3 font-bold uppercase">{name}</div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
};
