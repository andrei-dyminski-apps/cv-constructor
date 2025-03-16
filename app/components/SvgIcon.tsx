import { lazy, Suspense } from 'react';

const icons = import.meta.glob('../assets/icons/*.svg');

export const SvgIcon = ({
  name,
  className = '',
}: {
  name: string;
  className?: string;
}) => {
  const importIcon = icons[`../assets/icons/${name.toLowerCase()}.svg`];

  if (!importIcon) return null;

  // @ts-expect-error correct type
  const IconComponent = lazy(importIcon);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <IconComponent className={`overflow-hidden ${className}`} />
    </Suspense>
  );
};
