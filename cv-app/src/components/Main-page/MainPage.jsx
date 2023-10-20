import React from "react";

import Button from "../shared/Button";
import PhotoBox from "../shared/PhotoBox";
import "./MainPage.scss";
import { Link } from "react-router-dom";

function MainPage() {
  const fullName = "John Doe";
  const profession = "Programmer. Creative. Innovator";
  const description =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ";

  const btnName = "Know more";

  return (
    <section className="main-page-cover">
      <PhotoBox
        className="main-title"
        fullName={fullName}
        profession={profession}
        description={description}
      />
      <Link to="/inner">
        <Button btnName={btnName} className="btn-color-dark" />
      </Link>
    </section>
  );
}

export default MainPage;
