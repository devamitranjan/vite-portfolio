import Roles from "./roles";
import CompanyTitle from "./company-title";
import { companyDetails } from "../../mocks/company-details";
import "./company.css";

const Company = () => {
  return (
    <>
      {companyDetails.map((company) => (
        <div className='company' key={company.companyIndex}>
          <CompanyTitle companyName={company.companyName} />
          {company.roles.map((role, index) => (
            <Roles role={role} key={index} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Company;
