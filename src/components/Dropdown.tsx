import { useEffect, useRef, useState } from "react";
import "../index.css";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export type Option = {
  label: string;
  value: string;
};

interface Props {
  options: Option[];
  onChange: (value: Option | null) => void;
  value: Option | null;
}

function Dropdown({ options, value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };

    // true is used to give react the time to apply the changes before the event takes action.
    document.addEventListener("click", handler, true);

    const cleanup = () => {
      document.removeEventListener("click", handler);
    };

    return cleanup();
  }, []);

  const handleClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const handleOptionClick = (selectedOption: Option | null) => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
