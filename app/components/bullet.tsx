export const Bullet = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${className}`}
    />
  );
};
