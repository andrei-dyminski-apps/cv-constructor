import { Modal } from '~/components/settings/modal';
import { useData } from '~/hooks/data';
import { type ChangeEvent, useState } from 'react';
import { SvgIcon } from '~/components/SvgIcon';

export const Settings = () => {
  const { coreSkills, setCoreSkills, extraSkills, setExtraSkills } = useData();

  const handleChangeCoreSkill = (e: ChangeEvent<HTMLInputElement>) =>
    setCoreSkills((prev) => ({ ...prev, [e.target.value]: e.target.checked }));
  const handleChangeExtraSkill = (e: ChangeEvent<HTMLInputElement>) =>
    setExtraSkills((prev) => ({ ...prev, [e.target.value]: e.target.checked }));

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen((prev) => !prev);
  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 h-10 w-10 cursor-pointer rounded-lg border"
        type="button"
        onClick={handleToggleModal}
      >
        <SvgIcon name="menu" className="m-auto h-5 w-5" />
      </button>
      <Modal isOpen={isOpen} title="Settings">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Core skills</div>
            <ul className="flex flex-col gap-1">
              {Object.keys(coreSkills).map((skill) => (
                <li key={skill} className="">
                  <label className="-m-1 p-1">
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={handleChangeCoreSkill}
                    />
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">Extra skills</div>
            <ul className="flex flex-col gap-1">
              {Object.keys(extraSkills).map((skill) => (
                <li key={skill} className="">
                  <label className="-m-1 p-1">
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={handleChangeExtraSkill}
                    />
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
