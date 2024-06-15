import React from "react";
import SectionTitle from "./section-title";
import "./section.css";

/**
 * Section component contains different Sections available in page.
 *
 * @param {string} sectionClass - This helps to load different CSS.
 * @param {string} sectionTitle - The title of the section.
 * @param {ReactNode} children - To load children.
 * @param {string} id - The id of the section.
 * @return {ReactNode} The Section component.
 */

export interface ISection {
  sectionClass?: string;
  sectionTitle: string;
  children: React.ReactNode;
  id?: string;
}
const Section: React.FC<ISection> = ({
  sectionClass = "technology-title",
  sectionTitle,
  children,
  id = "",
}) => {
  const [titleClass] = React.useState(() => {
    return ["works", "work-experience"].includes(sectionClass)
      ? "work-title"
      : "technology-title";
  });
  return (
    <div className={`${sectionClass} section`} id={id}>
      <SectionTitle titleClass={titleClass} sectionTitle={sectionTitle} />
      {children}
    </div>
  );
};

export default Section;
