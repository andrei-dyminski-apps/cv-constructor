import { Button } from '~/components/button';

export const Print = () => {
  const handlePrint = () => window.print();

  return <Button icon="print" onClick={handlePrint} />;
};
