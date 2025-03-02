import { lazy } from 'react';

const icons = import.meta.glob('../assets/icons/*.svg');

export const SvgIcon = ({
  name,
  className = '',
}: {
  name: string;
  className?: string;
}) => {
  const importIcon = icons[`../assets/icons/${name}.svg`];

  if (!importIcon) return null;

  // @ts-expect-error correct type
  const IconComponent = lazy(importIcon);

  return <IconComponent className={className} />;
};
