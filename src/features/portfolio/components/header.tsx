import React, { useState } from "react";
import { HeaderData } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

interface HeaderProps {
  headerData: HeaderData | null;
}

const Header: React.FC<HeaderProps> = ({ headerData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      id="header"
      className="w-full border-b border-neutral-300 bg-white sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Left section: Mobile menu button (mobile only) + Logo */}
        <div className="flex items-center">
          {/* Mobile Menu Button - moved to the left */}
          <div className="md:hidden mr-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i
                className={
                  isMobileMenuOpen
                    ? "fas fa-times text-2xl"
                    : "fas fa-bars text-2xl"
                }
              ></i>
            </button>
          </div>

          {/* Logo/Brand */}
          <DataDisplayHandler
            loading={false}
            error={null}
            dataCheck={() => !!headerData && !!headerData.logoUrl}
            noDataComponent={
              <a
                href="#"
                className="flex items-center gap-2 focus:outline-none"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="text-lg text-neutral-800 tracking-tight">
                  Amit Ranjan (Logo missing)
                </span>
              </a>
            }
          >
            {headerData && headerData.logoUrl && (
              <a
                href="#"
                className="flex items-center gap-2 focus:outline-none"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img src={headerData.logoUrl} alt="Logo" className="h-8" />
                <span className="text-lg text-neutral-800 tracking-tight">
                  Amit Ranjan
                </span>
              </a>
            )}
          </DataDisplayHandler>
        </div>

        {/* Desktop Menu - remains on the right due to justify-between on parent */}
        <nav className="hidden md:flex items-center gap-6 text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu - structure remains the same (dropdown panel) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg absolute w-full left-0 top-16">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer py-2 w-full text-center"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
