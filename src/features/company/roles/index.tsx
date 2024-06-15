import { IRole } from "../../../mocks/types/company-details";
import Responsibilities from "../responibilites";
import "./roles.css";

export interface IRoles {
  role: IRole;
}

const Roles: React.FC<IRoles> = ({ role }) => {
  const [[roleTitle, responsibility]] = Object.entries(role);
  const isResponsiblityPresent = responsibility && responsibility.length > 0;

  if (!isResponsiblityPresent) return null;

  return (
    <div className='roles'>
      <ul>
        <li>
          <span className='role-title'>{roleTitle}</span>
          <br /> <br />
          <div className='responsiblities'>
            <Responsibilities responsibility={responsibility} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Roles;
