import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Can I use React on a project?",
      content:
        "You can use React on a project. For more information see https//github.com/facebook/react and https://github.com/facebook/react on https://github.com/facebook/react",
    },
    {
      id: "2",
      label: "Can I use React on a project?",
      content:
        "You can use React on a project. For more information see https//github.com/facebook/react and https://github.com/facebook/react on https://github.com/facebook/react",
    },
    {
      id: "3",
      label: "Can I use React on a project?",
      content:
        "You can use React on a project. For more information see https//github.com/facebook/react and https://github.com/facebook/react on https://github.com/facebook/react",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
