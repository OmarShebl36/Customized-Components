import classNames from "classnames";
import { ReactNode } from "react";
import useNavigation from "../hooks/use-navigation";

interface Props {
  to: string;
  children: ReactNode;
  additionalClassNames?: string;
  activeClassNames?: string;
}

function Link({ to, children, additionalClassNames, activeClassNames }: Props) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    additionalClassNames,
    currentPath === to && activeClassNames
  );

  const handleClick = (event: React.MouseEvent) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
