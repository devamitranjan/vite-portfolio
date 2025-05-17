import React from "react";
import { ExperienceItem } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

interface ExperienceSectionProps {
  data: ExperienceItem[] | null;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <DataDisplayHandler
      loading={false}
      error={null}
      dataCheck={() => !!data && data.length > 0}
      noDataComponent={
        <div
          id="experience"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm scroll-mt-20"
        >
          <p className="text-neutral-500 text-sm">
            Experience information is not available.
          </p>
        </div>
      }
    >
      {data && (
        <div
          id="experience"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 scroll-mt-20"
        >
          <div className="flex items-center gap-3">
            <i className="fas fa-briefcase text-neutral-700 text-2xl"></i>
            <div>
              <h2 className="block text-neutral-800 text-xl font-semibold">
                Experience
              </h2>
              <span className="block text-neutral-500 text-sm">
                Career Journey & Milestones
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {data.map((exp, index) => (
              <div key={`${exp.company}-${exp.role}-${index}`}>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neutral-700 rounded-full"></span>
                  <h3 className="text-neutral-800 text-sm font-semibold">
                    {exp.role} at {exp.company}
                  </h3>
                  <span className="ml-auto text-neutral-500 text-xs">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-600 text-xs mt-1 pl-5">
                  {exp.achievements.map(
                    (achievement: string, achIndex: number) => (
                      <li key={achIndex} className="mb-2">
                        {achievement}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default ExperienceSection;
