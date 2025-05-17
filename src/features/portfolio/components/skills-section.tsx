import React from "react";
import { SkillCategory } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

interface SkillsSectionProps {
  data: SkillCategory[] | null;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  return (
    <DataDisplayHandler
      loading={false}
      error={null}
      dataCheck={() => !!data && data.length > 0}
      noDataComponent={
        <div
          id="skills"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm scroll-mt-20"
        >
          <p className="text-neutral-500 text-sm">
            Skills information is not available.
          </p>
        </div>
      }
    >
      {data && (
        <div
          id="skills"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 scroll-mt-20"
        >
          <div className="flex items-center gap-3">
            <i className="fas fa-screwdriver-wrench text-neutral-700 text-2xl"></i>
            <div>
              <h2 className="block text-neutral-800 text-xl font-semibold">
                Skills
              </h2>
              <span className="block text-neutral-500 text-sm">
                My Technical Arsenal
              </span>
            </div>
          </div>

          {data.map((category) => (
            <div className="mt-2" key={category.categoryName}>
              <h3 className="text-sm font-semibold text-neutral-700 mb-1">
                {category.categoryName}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 text-xs border border-neutral-200 rounded bg-neutral-100 text-neutral-800"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default SkillsSection;
