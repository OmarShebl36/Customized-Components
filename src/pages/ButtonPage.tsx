import Button from "../components/Button";
import { GoBell, GoDatabase, GoDeviceMobile } from "react-icons/go";

function ButtonPage() {
  return (
    <>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button success outlined rounded>
          <GoDeviceMobile />
          Hello Mobile
        </Button>
      </div>
      <div>
        <Button danger rounded className="mb-5">
          <GoDatabase />
          Hi
        </Button>
      </div>
      <div>
        <Button outlined rounded>
          Bye Bye
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
