import "./company-title.css";

export interface ICompanyTitle {
  companyName: string;
}

const CompanyTitle: React.FC<ICompanyTitle> = ({ companyName }) => {
  return (
    <div className='company-title'>
      <h4>{companyName}</h4>
    </div>
  );
};

export default CompanyTitle;
