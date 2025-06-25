import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Card from "../Card/Card";
import Education from "../Education/Education";
import Coding from "../Coding/Coding";
import Skills from "../Skills/Skills";
import Project from "../Projects/Project";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Portfolio = () => {
  return (
    <>
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <Card title="My Education">
            <Education />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card title="My Skills">
            <Skills />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card title="My Profiles">
            <Coding />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
