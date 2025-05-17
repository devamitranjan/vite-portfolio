import React from "react";
import { AboutMeData } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

interface AboutSectionProps {
  data: AboutMeData | null;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <DataDisplayHandler
      loading={false}
      error={null}
      dataCheck={() => !!data}
      noDataComponent={
        <div
          id="about"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm scroll-mt-20"
        >
          <p className="text-neutral-500 text-sm">
            About information is not available.
          </p>
        </div>
      }
    >
      {data && (
        <div
          id="about"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 scroll-mt-20"
        >
          <div className="flex items-center gap-3">
            <img
              src={data.imageUrl}
              alt="Amit Ranjan"
              className="w-12 h-12 rounded-full border border-neutral-200"
            />
            <div>
              <h2 className="block text-neutral-800 text-xl font-semibold">
                {data.title}
              </h2>
              <span className="block text-neutral-500 text-sm">
                {data.subtitle}
              </span>
            </div>
          </div>
          <p className="text-neutral-700 text-sm leading-relaxed">
            {data.description}
          </p>
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default AboutSection;
