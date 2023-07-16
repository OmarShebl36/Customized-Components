import { useState } from "react";

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
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>{value?.label || 'Select...'}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}

export default Dropdown;
