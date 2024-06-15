import React from "react";
import "./timeline.css";
import { companyDetails } from "../../mocks/company-details";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <>
      {companyDetails.map((company) => (
        <div className='timeline-container' key={company.companyIndex}>
          <div className='timeline-header'>
            <h3>{company.companyName}</h3>
          </div>
          {company.roles.map((role) => {
            const [[roleTitle, responsibility]] = Object.entries(role);
            return (
              <div className='timeline-items' key={roleTitle}>
                <p>{roleTitle}</p>
                <div>
                  {responsibility.map((resp) => (
                    <div className='timeline-item-box' key={resp}>
                      {resp}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Timeline;
