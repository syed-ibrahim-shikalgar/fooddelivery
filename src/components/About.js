import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-section">
      <h1>About</h1>
      <h1>About namaste react</h1>
      <User name={"Syed Ibrahim (Function)"} />
      <UserClass name={"Syed Ibrahim (Class)"} location={"Bengaluru Class"} />
    </div>
  );
};

export default About;
