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
      <div className="bg-blue-950 py-3 px-5 uppercase font-bold">{name}</div>
      <div className="py-3 px-5">{children}</div>
    </div>
  );
};
