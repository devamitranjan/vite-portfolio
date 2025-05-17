import React from "react";
import { SocialLink, ResumeData } from "../portfolio.types"; // Import necessary types
import DataDisplayHandler from "../../../shared/components/data-display-handler"; // Import DataDisplayHandler

interface FooterProps {
  socialLinks: SocialLink[] | null;
  resume: ResumeData | null;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, resume }) => {
  const handleResumeDownload = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (!resume || !resume.url) {
      console.error("Resume URL is not available.");
      // Optionally, provide user feedback here
      return;
    }

    try {
      const response = await fetch(resume.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = resume.downloadName || "resume.pdf"; // Use downloadName from data, fallback if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Failed to download resume:", error);
      window.open(resume.url, "_blank");
    }
  };

  return (
    <DataDisplayHandler
      loading={false} // Footer data doesn't have its own loading cycle separate from App.tsx
      error={null} // Errors are handled by App.tsx
      dataCheck={() =>
        !!(socialLinks && socialLinks.length > 0 && resume && resume.url)
      } // Check for essential data
      noDataComponent={
        // Simple fallback for footer, or could be null to render nothing
        <div
          id="footer"
          className="w-full border-t border-neutral-200 bg-white mt-12 py-6"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            {/* Optionally, a very minimal footer or nothing if data is missing */}
            <span className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} DevAmitRanjan
            </span>
          </div>
        </div>
      }
    >
      {socialLinks && resume && (
        <div
          id="footer"
          className="w-full border-t border-neutral-200 bg-white mt-12 py-6"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
            <span className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} DevAmitRanjan
            </span>
            <div className="flex gap-4 items-center">
              {" "}
              {/* Added items-center for vertical alignment if needed */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-primary cursor-pointer"
                  aria-label={link.name}
                >
                  <i className={`${link.iconClass} text-lg`}></i>
                </a>
              ))}
              {resume.url && (
                <a
                  href={resume.url}
                  onClick={handleResumeDownload}
                  className="text-neutral-500 hover:text-primary cursor-pointer"
                  aria-label="Download Resume"
                  // download attribute is handled by the JS function but can be kept for semantics/fallback
                  download={resume.downloadName}
                >
                  <i className="fas fa-file-arrow-down text-lg"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default Footer;
