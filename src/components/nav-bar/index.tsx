import NavLinks from "./nav-links";
import NavBarToggle from "./nav-bar-toggle";
import NavBarLogo from "./nav-bar-logo";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavBarLogo />
      <NavBarToggle />
      <NavLinks />
    </div>
  );
};

export default NavBar;
