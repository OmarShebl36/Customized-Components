import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <>
      <Sidebar />
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </>
  );
}

export default App;
