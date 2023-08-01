import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </>
  );
}

export default App;
