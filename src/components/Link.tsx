import { ReactNode, useContext } from "react";
import NavigationContext from "../context/navigation";

interface Props {
  to: string;
  children: ReactNode;
}

function Link({ to, children }: Props) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(to);
  };
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
