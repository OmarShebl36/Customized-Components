import React, { useState } from "react";

type Item = {
  id: string;
  label: string;
  content: string;
};
interface Props {
  items: Item[];
}

function Accordion({ items }: Props) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  }
  
  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;
    return (
      <div key={item.id}>
        <h3 className="accordion__header" onClick={() => handleClick(index)}>{item.label}</h3>
        {isExpanded && <p className="accordion__innerContent">{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
