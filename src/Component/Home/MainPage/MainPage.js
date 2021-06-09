import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";
import myResume from "../../../myResume/Shoman Miah Resume (2).pdf";
// import Fade from "react-reveal/Fade";
import homePageImg from "../../../image/about-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const MainPage = () => {
  return (
    <section id="background-image">
      <div className="container pt-5  ">
        <div className="pb-5 mt-5">
          <div className="d-flex justify-content-between main-page">
            <div className="cust-hello">
              {/* <Fade top> */}
                <h3 class="des-line">
                  Hey <span class="des-line-1"> </span>
                </h3>
                <h1> I 'm SHOMAN</h1> <h2> Web Developer </h2>{" "}
                <div className="d-flex">
                  <Button
                    variant="success"
                    className="mr-3"
                    as={Link}
                    to="/about"
                  >
                    About Me
                  </Button>
                  <a href={myResume} target="_blank">
                    <Button variant="success" className="ml-3"><FontAwesomeIcon  icon={faArrowAltCircleDown}/>  Resume </Button>                 
                    
                  </a>
                </div>
              {/* </Fade> */}
            </div>
            <div className="cust-hello ">
            {/* <Fade right bottom> */}
              <div className="my-image">
                <img
                  src={homePageImg}
                  style={{ width: "450px", height: "400px" }}
                  alt=""
                />
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;