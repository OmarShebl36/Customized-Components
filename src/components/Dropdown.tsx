import { useState } from "react";
import "../index.css";
import { GoChevronDown } from "react-icons/go";


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
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
				<GoChevronDown className="text-lg"/>
      </div>
      {isOpen && (
        <div className="absolute top-full">
          {renderOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
