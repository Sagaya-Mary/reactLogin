
import React from "react";
import './Header.css';
class HeaderHome extends React.Component {
  render() {
    return (

      <div className="headhome">
        <a className="link-btn" href="/home">
          Home
        </a>
        <a className="link-btn" href="/about">
          About
        </a>

        <a className="link-btn" href="/contact">
          Contact
        </a>
      </div>
    );
  }
}
export default HeaderHome;