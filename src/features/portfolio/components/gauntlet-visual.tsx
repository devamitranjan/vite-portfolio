import React from "react";
import { GauntletVisualData } from "../portfolio.types"; // Import GauntletVisualData
import DataDisplayHandler from "../../../shared/components/data-display-handler"; // Import DataDisplayHandler

interface GauntletVisualProps {
  // Define props interface
  gauntletVisualData: GauntletVisualData | null;
}

const GauntletVisual: React.FC<GauntletVisualProps> = ({
  gauntletVisualData,
}) => {
  return (
    <section
      id="gauntlet-visual"
      className="flex flex-col items-center justify-start py-6 md:justify-center md:flex-1 md:min-w-[380px] md:sticky md:top-20 md:self-start md:h-screen-minus-header"
    >
      <DataDisplayHandler
        loading={false} // Assuming App.tsx handles global loading
        error={null} // Assuming App.tsx handles global error
        dataCheck={() =>
          !!gauntletVisualData && !!gauntletVisualData.profileImageUrl
        }
        noDataComponent={
          // Fallback if profileImageUrl is missing
          <div className="relative w-[320px] h-[520px] flex items-center justify-center bg-neutral-200 rounded-3xl">
            <p className="text-neutral-500">Profile image unavailable</p>
          </div>
        }
      >
        {gauntletVisualData && gauntletVisualData.profileImageUrl && (
          <div className="relative w-[320px] h-[520px] flex items-center justify-center">
            <img
              src={gauntletVisualData.profileImageUrl}
              alt="Profile Image"
              className="absolute inset-0 rounded-3xl w-full h-full object-cover"
            />
          </div>
        )}
      </DataDisplayHandler>

      {/* Navigation links remain the same */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <a href="#about" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-900 rounded-full inline-block"></span>
            <span className="text-xs text-neutral-700">About</span>
          </a>
          <a href="#skills" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-700 rounded-full inline-block"></span>
            <span className="text-xs text-neutral-700">Skills</span>
          </a>
          <a href="#projects" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-800 rounded-full inline-block"></span>
            <span className="text-xs text-neutral-700">Projects</span>
          </a>
          <a href="#experience" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-900 rounded-full inline-block"></span>
            <span className="text-xs text-neutral-700">Experience</span>
          </a>
          <a href="#contact" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-700 rounded-full inline-block"></span>
            <span className="text-xs text-neutral-700">Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GauntletVisual;
