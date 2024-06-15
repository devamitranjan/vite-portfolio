import React from "react";
import "./section-title.css";

export interface ISectionTitle {
  titleClass: string;
  sectionTitle: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({
  titleClass,
  sectionTitle,
}) => {
  return (
    <div className={titleClass}>
      <h2>{sectionTitle}</h2>
    </div>
  );
};

export default SectionTitle;
