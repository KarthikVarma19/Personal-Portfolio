import Card from "../Card/Card";
import Education from "../Education/Education";
import Coding from "../Coding/Coding";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  return (
    <div className="w-full h-full">
      <div className="row d-flex flex-row align-items-center justify-content-center p-2">
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
    </div>
  );
};

export default Portfolio;
