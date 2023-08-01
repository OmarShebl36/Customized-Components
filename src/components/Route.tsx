import useNavigation from "../hooks/use-navigation";

interface Props {
  path: string;
  children: JSX.Element;
}

function Route({ path, children }: Props) {
  const { currentPath } = useNavigation();
  if (path === currentPath) return children;
  return null;
}

export default Route;
