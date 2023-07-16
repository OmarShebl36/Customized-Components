import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

interface Props {
  options: Option[];
}

function Dropdown({ options }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, SetselectedOption] = useState("Select...");

  const handleClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const handleOptionClick = (selectedOption: Option) => {
    SetselectedOption(selectedOption.label);
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
      <div onClick={handleClick}>{selectedOption}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}

export default Dropdown;
