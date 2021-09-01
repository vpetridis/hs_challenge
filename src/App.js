import "./App.css";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Info } from "./components/Info";
import { ReactSVG } from "react-svg";
import design_logo from "./assets/icons/design-logo.svg";
import person from "./assets/images/person.png";
import { InfoBox } from "./components/InfoBox";
import { InfoContent } from "./components/InfoContent";
import { CustomAccordion } from "./components/CustomAccordion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="main--container">
        <Info
          title="Interaction Design Apprenticeship"
          subtitle="A fully funded work-study program to launch your tech career"
          description="Harbour.Space has partnered with SCG to empower driven talent 
          and eliminate the barriers to accessing exceptional education and career opportunities through
           a Masters Fellowship."
          label="Marketing Performance"
        >
          <Button text="Apply Now" />
          <ReactSVG
            src={design_logo}
            style={{
              position: "relative",
              top: "-400px",
              right: "-250px",
            }}
          />
        </Info>
        <div className="d-flex flex-column">
          <InfoBox width="480px">
            <InfoContent
              title="Application closes in"
              description="6 Day  :  22 Hrs  :  56 Min  :  13 Seg "
            />
          </InfoBox>
          <InfoBox width="480px">
            <div className="d-flex justify-content-between">
              <InfoContent
                title="Location"
                description="Bangkok"
              />
              <InfoContent
                title="Duration"
                description="1 Year"
              >
                <p>FullTime</p>
              </InfoContent>
            </div>
            <div className="d-flex justify-content-between">
              <InfoContent
                title="Start date"
                description="30 June 2020"
              />
              <InfoContent
                title="End date"
                description="3 Aug 2020"
              />
            </div>
          </InfoBox>
        </div>
      </main>
      <section className="main--container">
        <img
          src={person}
          className="img-avatar"
        />
        <Info
          title="About the apprenticeship"
          subtitle="A fully funded work-study program to launch your tech career"
          description="Our scholarships are designed to give talented and driven young 
          people from any background access to top-class education, experience and network. 
          We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  "
        ></Info>
      </section>
      <section className="main--container">
        <InfoBox height="470px">
          <InfoContent
            title="Scholarship value"
            description="€31,300"
          >
            <h3>***TODO CONTENT***</h3>
          </InfoContent>
        </InfoBox>
        <div>
          <div className="d-flex justify-content-between">
            <InfoBox height="270px" width="25vw">
              <InfoContent
                title="Study commitment"
                description="3 hours / day"
              >
                <p>
                  You will complete 15 modules to
                  graduate. Daily classes are 3
                  hours, plus coursework to
                  complete in your own time.{" "}
                </p>
              </InfoContent>
            </InfoBox>
            <InfoBox height="270px" width="25vw">
              <InfoContent
                title="Work commitment"
                description="4 hours / day"
              >
                <p>
                  Immerse yourself in the
                  professional world during your
                  apprenticeship. You’ll learn the
                  ropes from the best and get to
                  apply your newly acquired
                  knowledge in the field from day
                  one.
                </p>
              </InfoContent>
            </InfoBox>
          </div>
          <div>
            <InfoBox height="170px" width="50vw">
              <InfoContent
                title="A full-time contract"
                description="1 Year / Full-Time"
              >
                <p>
                  You’ll be guaranteed a 1 year
                  contract with SCG upon
                  graduation.
                </p>
              </InfoContent>
            </InfoBox>
          </div>
        </div>
      </section>{" "}
      <section className="main--container my-3">
        {/* <CustomAccordion /> */}
      </section>
    </div>
  );
}

export default App;
