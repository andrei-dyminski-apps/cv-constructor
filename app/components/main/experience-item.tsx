import { List } from '~/components/list';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
};

export const ExperienceItem = ({
  company,
  position,
  period,
  responsibilities,
  achievements,
}: ExperienceItem) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-baseline gap-6">
        <div className="flex min-w-0 gap-1">
          <span className="font-bold">{position}</span> -{' '}
          <h3 className="italic">«{company}»</h3>
        </div>
        <div className="ml-auto text-sm">{period}</div>
      </div>
      {responsibilities.length && (
        <div className="flex flex-col gap-1 text-sm">
          <h3 className="font-bold">Job Responsibilities:</h3>
          <List items={responsibilities} />
        </div>
      )}
      {!!achievements.length && (
        <div className="flex flex-col gap-1 text-sm">
          <h3 className="font-bold">Achievements:</h3>
          <List items={achievements} />
        </div>
      )}
    </section>
  );
};
