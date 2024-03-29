import { ReactNode, createContext, useEffect, useState } from "react";

interface ValueType {
  navigate: (to: string) => void;
  currentPath: string;
}

const NavigationContext = createContext({} as ValueType);

interface NavigationProps {
  children: ReactNode;
}

function NavigationProvider({ children }: NavigationProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
