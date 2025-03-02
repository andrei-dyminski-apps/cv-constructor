import { Avatar } from '~/components/avatar';
import { Contacts } from '~/components/contacts';
import { Languages } from '~/components/languages';
import { CoreSkills } from '~/components/core-skills';
import { ExtraSkills } from '~/components/extra-skills';

export const Aside = () => {
  return (
    <section className="w-1/3 bg-blue-900 text-[15px] text-white">
      <Avatar />
      <Contacts />
      <Languages />
      <CoreSkills />
      <ExtraSkills />
    </section>
  );
};
