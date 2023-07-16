import { useState } from "react";
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

  const handleClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const handleOptionClick = (selectedOption: Option | null) => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  const renderOptions = options.map((option) => {
    return (
      <Panel
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </Panel>
    );
  });
  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
				<GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <div className="absolute top-full">
          {renderOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
