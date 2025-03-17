import { Modal } from '~/components/settings/modal';
import { useData } from '~/hooks/data';
import { type ChangeEvent, useEffect, useState } from 'react';
import { SvgIcon } from '~/components/SvgIcon';
import { Checkbox } from '~/components/settings/checkbox';

export const Settings = () => {
  const { coreSkills, setCoreSkills, extraSkills, setExtraSkills } = useData();

  const handleChangeCoreSkill = (e: ChangeEvent<HTMLInputElement>) =>
    setCoreSkills((prev) => ({ ...prev, [e.target.value]: e.target.checked }));
  const handleChangeExtraSkill = (e: ChangeEvent<HTMLInputElement>) =>
    setExtraSkills((prev) => ({ ...prev, [e.target.value]: e.target.checked }));

  const [isOpen, setIsOpen] = useState(true);
  const handleToggleModal = () => setIsOpen((prev) => !prev);
  const handleCloseModal = (e: KeyboardEvent) =>
    e.key === 'Escape' && setIsOpen(false);

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);
    return () => document.removeEventListener('keydown', handleCloseModal);
  }, []);
  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 h-10 w-10 cursor-pointer rounded-lg border"
        type="button"
        onClick={handleToggleModal}
      >
        <SvgIcon name="menu" className="m-auto h-5 w-5" />
      </button>
      <Modal isOpen={isOpen} title="Settings" onToggle={handleToggleModal}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Core skills</div>
            <ul className="flex flex-col gap-1">
              {Object.entries(coreSkills).map(([skill, value]) => (
                <li key={skill} className="">
                  <Checkbox
                    label={skill}
                    value={value}
                    onChange={handleChangeCoreSkill}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Extra skills</div>
            <ul className="flex flex-col gap-1">
              {Object.entries(extraSkills).map(([skill, value]) => (
                <li key={skill} className="">
                  <Checkbox
                    label={skill}
                    value={value}
                    onChange={handleChangeExtraSkill}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
