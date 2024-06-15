import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import Section from "./components/section";
import Timeline from "./features/timeline";
import ContactForm from "./features/contact";
import Profile from "./features/profile";
import { Technology } from "./features/technology";

function App() {
  return (
    <>
      <NavBar />
      <Profile />
      {/* <Section sectionClass="works" sectionTitle={"Projects"}>
      <Projects />
    </Section> */}
      <Section
        sectionClass='work-experience'
        sectionTitle='Work Experience'
        id='experience'
      >
        <Timeline />
      </Section>
      <Section
        sectionClass='technologies'
        sectionTitle='Tools and Technologies'
        id='technologies'
      >
        <Technology />
      </Section>
      <Section
        sectionClass='contact'
        sectionTitle='Book a session'
        id='contact'
      >
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}

export default App;
