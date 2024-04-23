import React from "react";
import { Link } from "react-router-dom";

export default class LogoTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <div className="logo-box-one">
          <Link to={process.env.PUBLIC_URL + `/`}>
            <img
              className="logoFerti"
              src={publicUrl + "assets/images/resources/fertilizeoorig.webp"}
              alt="Awesome Logo"
            />
          </Link>
        </div>
      </>
    );
  }
}
