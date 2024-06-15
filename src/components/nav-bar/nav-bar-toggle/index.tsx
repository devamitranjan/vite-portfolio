import React from "react";
import "./nav-bar-toggle.css";
import { navLinkData } from "../nav-link.data";

const NavBarToggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link: {
    href: string;
    target?: string;
    referrer?: string;
  }) => {
    setIsSidebarOpen(false);
    if (link.target) {
      window.open(link.href, "_blank");
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <React.Fragment>
      <div className='toggle-button' onClick={handleToggleClick}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      {isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
          {navLinkData.map((item) => {
            const { label, ...link } = item;
            return (
              <div className='sidebar-link' key={label}>
                <span onClick={() => handleLinkClick(link)}>{label}</span>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBarToggle;
