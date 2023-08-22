import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>contact: syedibrahim7755@gmail.com</h4>
    </div>
  );
};

export default User;
