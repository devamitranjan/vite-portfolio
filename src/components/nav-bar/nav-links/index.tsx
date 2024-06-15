import "./nav-links.css";

const NavLinks = () => {
  const links = [
    { href: "", label: "Home" },
    { label: "Experience", href: "/#experience" },
    { label: "Technologies", href: "/#technologies" },
    {
      label: "Github",
      href: "https://github.com/devamitranjan",
      target: "_blank",
      referrer: "no-referrer",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/devamitranjan/",
      target: "_blank",
      referrer: "no-referrer",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className='nav-links'>
      <ul>
        {links.map((item) => {
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
