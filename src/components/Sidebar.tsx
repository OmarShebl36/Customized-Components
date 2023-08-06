import Link from "./Link";

function Sidebar() {
  const links = [
    {
      label: "Dropdown",
      path: "/dropdown",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
      label: "Counter",
      path: "/counter",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        additionalClassNames='mb-3'
        activeClassNames='font-bold border-l-4 border-blue-500 pl-2'
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className='sticky top-0 overflow-y-auto flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
