import type { Route } from './+types/home';
import { Aside } from '~/components/aside/aside';
import { useData } from '~/hooks/data';
import { Main } from '~/components/main/main';
import { Settings } from '~/components/settings/settings';

export function meta({}: Route.MetaArgs) {
  const { data } = useData();
  const name = `CV ${data.personal.name}`;

  return [{ title: name }, { name: 'description', content: name }];
}

export default function Home() {
  return (
    <div className="mx-auto flex h-[297mm] w-[210mm] grow">
      <Settings />
      <Aside />
      <Main />
    </div>
  );
}
