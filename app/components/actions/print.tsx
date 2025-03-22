import { Button } from '~/components/actions/button';

export const Print = () => {
  const handlePrint = () => window.print();

  return <Button icon="print" onClick={handlePrint} />;
};
