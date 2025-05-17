import { useState, useEffect } from "react";
import Header from "./features/portfolio/components/header";
import GauntletVisual from "./features/portfolio/components/gauntlet-visual";
import AboutSection from "./features/portfolio/components/about-section";
import SkillsSection from "./features/portfolio/components/skills-section";
import ProjectsSection from "./features/portfolio/components/projects-section";
import ExperienceSection from "./features/portfolio/components/experience-section";
import ContactSection from "./features/portfolio/components/contact-section";
import Footer from "./features/portfolio/components/footer";
import { PortfolioData } from "./features/portfolio/portfolio.types";

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/portfolio-data.json");
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} while fetching portfolio data.`
          );
        }
        const data: PortfolioData = await response.json();
        setPortfolioData(data);
      } catch (e) {
        setError(e as Error);
        setPortfolioData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <i className="fas fa-spinner fa-spin text-4xl text-neutral-500"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center p-4">
        <p className="text-red-500 text-xl mb-2">
          Failed to load portfolio data.
        </p>
        <p className="text-neutral-600 text-sm">Reason: {error.message}</p>
        <p className="text-neutral-500 text-xs mt-4">
          Please try refreshing the page or contact support if the issue
          persists.
        </p>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="w-full h-screen flex justify-center items-center p-4">
        <p className="text-neutral-500 text-lg">
          Portfolio data could not be loaded or is incomplete.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header headerData={portfolioData.header} />
      <main
        id="main-gauntlet"
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 px-4 py-12 h-auto min-h-[900px]"
      >
        <GauntletVisual gauntletVisualData={portfolioData.gauntletVisual} />
        <section id="portfolio-content" className="flex-1 flex flex-col gap-10">
          <AboutSection data={portfolioData.aboutMe} />
          <SkillsSection data={portfolioData.skillCategories} />
          <ProjectsSection data={portfolioData.projects} />
          <ExperienceSection data={portfolioData.experience} />
          <ContactSection contactData={portfolioData.contact} />
        </section>
      </main>
      <Footer
        socialLinks={portfolioData.socialLinks}
        resume={portfolioData.resume}
      />
    </>
  );
}

export default App;
