import { useContext } from "react";
import NavigationContext from "../context/navigation";

interface Props {
  path: string;
  children: JSX.Element;
}

function Route({ path, children }: Props) {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) return children;
  return null;
}

export default Route;
