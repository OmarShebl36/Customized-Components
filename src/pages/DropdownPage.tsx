import { useState } from "react";
import Dropdown, { Option } from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState<Option | null>(null);

  const handleSelect = (selectedValue: Option | null) => {
    setSelection(selectedValue);
  };

  const options = [
    { label: 'Red', value: 'Red' },
    { label: 'Green', value: 'Green`' },
    { label: 'Blue', value: 'Blue' },
  ]
  return <Dropdown options={options} value={selection} onChange={handleSelect} />;
}

export default DropdownPage;
