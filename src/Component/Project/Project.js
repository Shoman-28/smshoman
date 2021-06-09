import React from "react";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import ServiceImg from "../../image/Service-img.jpg";
import FoodShop from "../../image/FoodShop.jpg";
import RaideSharing from "../../image/RaideSharing.jpg";
// import Fade from "react-reveal/Fade";

const myProject = [
  {
    name: "Digital Service Center",
    image: ServiceImg,
    details:"A single-page Electronics service application. Here admin and user are shown separately.",
    liveLink: "https://digital-service-center-459b7.web.app",
    gitLink: "https://github.com/Shoman-28/Digital-Service-Center",
  },
  {
    name: "Food Shop",
    image: FoodShop,
    details:"A single-page food shop app. The administrator can add or remove any product if he wants and see the user's order",
    liveLink: "https://fresh-food-2ee90.web.app",
    gitLink: "https://github.com/Shoman-28/food-corner",
  },
  {
    name: "Raide Sharing",
    image: RaideSharing,
    details:"A single car service application. Here the user will be able to find the car to go anywhere and see how many scales to.",
    liveLink: "https://bd-raider.web.app",
    gitLink: "https://github.com/Shoman-28/BD-Rider-Share",
  },
];
const Project = () => {
  return (
    <div className="homePage pt-5 pb-5">
      {/* <Fade left> */}
        <h1 className="mb-5 pl-5 pt-5">
          My Project
        </h1>
      {/* </Fade> */}
      <div className="container">
        <div className="mt-5 pt-5 mb-5">
          <div className="w-74 row">
            {myProject.map((p) => (
              <ProjectDetails projcet={p}> </ProjectDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
