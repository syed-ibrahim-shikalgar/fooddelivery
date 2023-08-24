import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-section">
        <h1>About Class Component</h1>
        <h1>About namaste react</h1>

        <UserClass name={"Syed Ibrahim (Class)"} location={"Bengaluru Class"} />
      </div>
    );
  }
}

export default About;
