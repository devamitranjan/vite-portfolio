import "./contact-form.css";

const ContactForm = () => {
  return (
    <div className='contact-form'>
      {/* <!-- Calendly inline widget begin --> */}
      <div
        className='calendly-inline-widget'
        data-url='https://calendly.com/connectdevamit/30min'
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default ContactForm;
