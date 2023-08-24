import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/syed-ibrahim-shikalgar"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: syedibrahim7755@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
