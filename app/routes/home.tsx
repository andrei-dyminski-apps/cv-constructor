import type { Route } from './+types/home';
import { Aside } from '~/components/aside';
import { useData } from '~/hooks/data';

export function meta({}: Route.MetaArgs) {
  const { personal } = useData();
  const name = `CV ${personal.name}`;

  return [{ title: name }, { name: 'description', content: name }];
}

export default function Home() {
  return (
    <div className="mx-auto my-2.5 flex w-[240mm] grow">
      <Aside />
    </div>
  );
}
