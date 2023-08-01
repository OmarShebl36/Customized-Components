import React, { useState } from "react";
import "../index.css";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type Item = {
  id: string;
  label: string;
  content: string;
};
interface Props {
  items: Item[];
}

function Accordion({ items }: Props) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === index) return -1;

      return index;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <h3
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </h3>
        {isExpanded && <p className="border-b p-5">{item.content}</p>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
