import Card from "../Card/Card";
import Education from "../Education/Education";
import Coding from "../Coding/Coding";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  return (
    <div className="w-full h-full page-enter overflow-y-auto-scrollbar">
      <div className="row d-flex flex-row align-items-stretch justify-content-center p-2">
        <div className="col-12 col-lg-8">
          <Card title="Experience">
            <Experience />
          </Card>
        </div>
        <div className="col-12 col-lg-4">
          <Card title="Skills">
            <Skills />
          </Card>
        </div>
      </div>
      <div className="row d-flex flex-row align-items-stretch justify-content-center p-2">
        <div className="col-12 col-md-6 col-lg-6">
          <Card title="Education">
            <Education />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Card title="Profiles">
            <Coding />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
