import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>hritikparmar33@gmail.com</p>
            <p>Mumbai, India</p>
            <p>
              <a
                href="https://www.linkedin.com/in/hritik-parmar"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — hritik-parmar
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor of Science (B.Sc), Mumbai University, India (2019–2021)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/hritik661/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/hritik-parmar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/hritik.parmar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Certifications</h4>
            <p>
              <a
                href="https://www.hackerrank.com/certificates/0959b5734202"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank SQL Advanced
              </a>
            </p>
            <p>
              <a
                href="http://hritik661.github.io/Microsoft-AZ900/"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Azure AZ-900
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Hritik Parmar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
