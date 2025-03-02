import { Avatar } from '~/components/aside/avatar';
import { Contacts } from '~/components/aside/contacts';
import { Languages } from '~/components/aside/languages';
import { CoreSkills } from '~/components/aside/core-skills';
import { ExtraSkills } from '~/components/aside/extra-skills';
import { Employment } from '~/components/aside/employment';

export const Aside = () => {
  return (
    <section className="w-1/3 bg-blue-900 text-sm text-white">
      <Avatar />
      <Contacts />
      <Languages />
      <Employment />
      <CoreSkills />
      <ExtraSkills />
    </section>
  );
};
