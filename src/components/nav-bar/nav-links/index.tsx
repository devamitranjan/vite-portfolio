import { navLinkData } from "../nav-link.data";
import "./nav-links.css";

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <ul>
        {navLinkData.map((item) => {
          const { label, ...link } = item;
          return (
            <li key={label}>
              <a {...link}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
