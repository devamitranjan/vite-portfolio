import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      &copy;{year}&nbsp;<a href='/'> Devamitranjan</a>&nbsp;All rights reserved.
    </div>
  );
};

export default Footer;
