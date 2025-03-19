import { Settings } from '~/components/settings/settings';
import { Print } from '~/components/print';

export const Actions = () => {
  return (
    <div className="fixed top-4 left-4 z-20 flex gap-4 print:hidden">
      <Settings />
      <Print />
    </div>
  );
};
