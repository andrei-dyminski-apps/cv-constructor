import type { Route } from './+types/home';
import { Aside } from '~/components/aside/aside';
import { useData } from '~/hooks/data';
import { Main } from '~/components/main/main';

export function meta({}: Route.MetaArgs) {
  const { personal } = useData();
  const name = `CV ${personal.name}`;

  return [{ title: name }, { name: 'description', content: name }];
}

export default function Home() {
  return (
    <div className="mx-auto flex h-[297mm] w-[210mm] grow">
      <Aside />
      <Main />
    </div>
  );
}
