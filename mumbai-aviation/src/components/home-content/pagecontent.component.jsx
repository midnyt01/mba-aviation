// import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide";
import InfoIcon1 from "../../assets/salary.png";
import InfoIcon2 from "../../assets/supplier.png";
import InfoIcon3 from "../../assets/cv.png";
import "./home-content.styled.css";

const Pagecontent = () => {

  const handleOnClickContact = () => {
    if (window.innerWidth > 800) {
      window.scrollTo({top: 700, behavior: 'smooth'})
    } else {
      window.scrollTo({top: 350, behavior: 'smooth'})
    }
  }


  return (
    <div className="container-fluid m-auto">
      <br /><br />
      <h2 className="default-heading-h2">
        What is the Scope?
        <hr className="heading-h2" />
      </h2>
      <Slide bottom cascade>
        <div className="box-container">
          <div className="info-box red-box">
            <img src={InfoIcon1} alt="clg icon" />
            <h3>INR 4 Lacs to INR 7 Lacs</h3>
            <p>Average starting salary per year</p>
          </div>
          <div className="info-box mustard-box">
            <img src={InfoIcon2} alt="clg icon" />
            <h3>USD $16</h3>
            <p>Million Dollar Industry</p>
          </div>
          <div className="info-box blue-box">
            <img src={InfoIcon3} alt="clg icon" />
            <h3>2,50,000</h3>
            <p>No. of vacancies</p>
          </div>
        </div>
        <br /><br />
        <h2 className="default-heading-h2">
          Why MBA in Aviation Management?
          <hr className="heading-h2" />
        </h2>
        <div>
          <ul>
            <li>
              The aviation industry is facing a significant shortage of skilled
              professionals, and it is projected to grow at a rate of over 24%.
              As a result, there is a high demand for management professionals
              in this industry.
            </li>
            <li>
              The aviation industry generates hundreds of thousands of jobs each
              year.
            </li>
            <li>
              ILAM's MBA program in Aviation Management is a unique and
              well-structured course designed to prepare future managers for
              tomorrow's aviation industry.
            </li>
            <li>
              The program curriculum is tailored to equip aspirants with
              specialized knowledge and training in various areas of the
              aviation industry, including fleet management, ground handling,
              cargo, safety and security, customer service, medical tourism,
              crew scheduling, and ticketing.
            </li>
            <li>
              This program provides a blend of practical and classroom teaching,
              which makes you a preferred candidate for your future employer in
              the field of supply chain management in India.
            </li>
          </ul>
        </div>

        {/* featurs */}
        <h2 className="default-heading-h2">
          Features of the Program
          <hr className="heading-h2" />
        </h2>
        <div>
          <ul>
            <li>
              Computer Application CBT (Galileo Basic Training-Triple Package
              for Airlines, Hostel, and road transportation).
            </li>
            <li>
              Industry Attachments with Project work / Presentations /
              Industrial Visits / Guest lectures / Seminars / Conferences.
            </li>
            <li>
              Unique features of the program - Personality Development, Foreign
              Language, First Aid Training, and Computer Application.
            </li>
            <li>
              This program provides hands-on experience in the following
              training that makes you a preferred candidate by your future
              employer:
            </li>
            <ol>
              <li>Ditching/Wet Drill</li>
              <li>Water Survival / Raft Boarding</li>
              <li>Galileo Software Training</li>
              <li>Grooming</li>
              <li>First Aid Training</li>
              <li>Emergency Exit</li>
              <li>Smoke & Live Fire Training</li>
              <li>Ramp Safety Training</li>
              <li>Additional Language</li>
              <li>Aircraft Ground Handling & Safety Training</li>
            </ol>
          </ul>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={handleOnClickContact} className="light-text default-cta h-70px" style={{padding: '10px 70px', margin: 'auto'}}>Apply Now</button>
        </div>
      </Slide>
    </div>
  );
};

export default Pagecontent;
