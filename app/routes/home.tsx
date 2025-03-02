import type { Route } from './+types/home';
import { Aside } from '~/components/aside';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="flex w-[240mm] mx-auto my-2.5 grow">
      <Aside />
    </div>
  );
}
