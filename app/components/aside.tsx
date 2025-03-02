import { Avatar } from '~/components/avatar';
import { Contacts } from '~/components/contacts';
import { Languages } from '~/components/languages';

export const Aside = () => {
  return (
    <section className="w-1/3 bg-blue-900 text-white">
      <Avatar />
      <Contacts />
      <Languages />
    </section>
  );
};
