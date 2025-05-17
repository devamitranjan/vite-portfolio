import React from "react";
import { Project } from "../portfolio.types";
import DataDisplayHandler from "../../../shared/components/data-display-handler";

interface ProjectsSectionProps {
  data: Project[] | null;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  return (
    <DataDisplayHandler
      loading={false}
      error={null}
      dataCheck={() => !!data && data.length > 0}
      noDataComponent={
        <div
          id="projects"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm scroll-mt-20"
        >
          <p className="text-neutral-500 text-sm">
            Projects information is not available.
          </p>
        </div>
      }
    >
      {data && (
        <div
          id="projects"
          className="border border-neutral-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 scroll-mt-20"
        >
          <div className="flex items-center gap-3">
            <i className="fas fa-diagram-project text-neutral-700 text-2xl"></i>
            <div>
              <h2 className="block text-neutral-800 text-xl font-semibold">
                Projects
              </h2>
              <span className="block text-neutral-500 text-sm">
                Featured Work & Case Studies
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {data.map((project) => (
              <div
                key={project.title}
                className="border border-neutral-200 rounded-lg p-3 bg-neutral-50"
              >
                {project.imageUrl && (
                  <div className="bg-neutral-400 w-full h-40 rounded mb-2 flex items-center justify-center text-white text-xs overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-neutral-800 text-sm font-semibold">
                  {project.title}
                </h3>
                <p className="block text-neutral-600 text-xs mt-1">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-neutral-700 mb-1">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs border border-neutral-200 rounded bg-neutral-100 text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-3 flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      Live Demo{" "}
                      <i className="fas fa-external-link-alt text-xxs ml-0.5"></i>
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      View Code{" "}
                      <i className="fab fa-github text-xxs ml-0.5"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DataDisplayHandler>
  );
};

export default ProjectsSection;
