import { DevAmitRanjanLogo } from "../../graphics/logos/dev-amit-ranjan-logo";
import "./nav-bar-logo.css";

const NavBarLogo = () => {
  return (
    <div className='brand-title' onClick={() => window.scrollTo(0, 0)}>
      <DevAmitRanjanLogo height={50} />
    </div>
  );
};

export default NavBarLogo;
