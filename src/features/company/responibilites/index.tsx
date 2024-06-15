export interface IResponsibilities {
  responsibility: string[];
}

const Responsibilities: React.FC<IResponsibilities> = ({ responsibility }) => {
  return (
    <ul>
      {responsibility.map((item, index) => (
        <li className='responsibility' key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Responsibilities;
