import React from "react";
import "./About.css";
import aboutImage from "../../image/image 110 (1).png";
import { Button } from "react-bootstrap";
// import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div class="homePage pt-5 pb-5">
      {/* <Fade left> */}
        <h1 className="mb-5 pl-5 pt-5">About Me</h1>
      {/* </Fade> */}
      {/* <Fade right cascade> */}

      <div class="container">
        <div className="mt-5 pt-5 mb-5">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-img pb-4 text-center">
                {/* <Fade bottom left> */}
                  <img src={aboutImage} alt="" />
                {/* </Fade> */}
              </div>
              {/* <Fade bottom left> */}
                <h3>I'm (SM) Shoman</h3>
                <p>
                  I am a front-end web developer. I have been working as a
                  professional web developer in Bangladesh for almost one year.
                  I like programming. My favorite language is JavaScript. I have
                  experienced all the expectations of web development using
                  JavaScript technology. Every day I try to solve some problems
                  using JavaScript. My main focus is to make the website
                  mobile-friendly, SEO-friendly, browser compatible and coding
                  in the most optimized way so that it performs well.
                </p>
                {/* </Fade> */}
                {/* <Fade bottom left> */}
                <a href="https://drive.google.com/file/d/1hKyolaG7Cx9DpHFmBmar0OxPdojbv62h/view?usp=sharing" target="_blank">
                  <Button variant="success" className="">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} /> Resume
                  </Button>
                </a>
              {/* </Fade> */}
            </div>

            <div class="col-lg-6 sha ">
              <div class="about-me">
                <div class="line mt-5 mb-3 ">
                  <span class="line-1"></span>
                  <br />
                  <span class="line-2"></span>
                  <br />
                  <span class="line-3"></span>
                </div>
                {/* <Fade top right> */}
                  <h4 class="">My Skills</h4>
                  <div className="d-flex flex-wrap justify-content-end pt-3 pb-5">
                    <small className="Skills-deatils">Html</small>
                    <small className="Skills-deatils">CSS</small>
                    <small className="Skills-deatils">JavaScript</small>
                    <small className="Skills-deatils">React.js</small>
                    <small className="Skills-deatils">Redux.js</small>
                    <small className="Skills-deatils">Node.js</small>
                    <small className="Skills-deatils">Express.js</small>
                    <small className="Skills-deatils">Mongo DB</small>
                    <small className="Skills-deatils">Material UI</small>
                    <small className="Skills-deatils">React-Bootstrap</small>
                    <small className="Skills-deatils">Firebase</small>
                    <small className="Skills-deatils">Netlify</small>
                    <small className="Skills-deatils">Git</small>
                    <small className="Skills-deatils">Heroku</small>
                  </div>
                  <h4 class="">I want to work</h4>
                  <div className="d-flex flex-wrap justify-content-end pt-3">
                    <small className="Skills-deatils">JavaScript</small>
                    <small className="Skills-deatils">React.js</small>
                    <small className="Skills-deatils">Redux.js</small>
                    <small className="Skills-deatils">Node.js</small>
                    <small className="Skills-deatils">Express.js</small>
                    <small className="Skills-deatils">Mongo DB</small>
                    <small className="Skills-deatils">React-Bootstrap</small>
                  </div>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default About;
