import { ReactNode, useContext } from "react";
import NavigationContext from "../context/navigation";

interface Props {
  to: string;
  children: ReactNode;
}

function Link({ to, children }: Props) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event: React.MouseEvent) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
