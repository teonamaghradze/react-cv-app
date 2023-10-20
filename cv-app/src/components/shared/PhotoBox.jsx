import React from "react";
import avatar from "../../assets/images/avatar.svg";
import "./PhotoBox.scss";

function PhotoBox({ fullName, profession, description, className }) {
  return (
    <main className="photo-box">
      <section>
        <img className={`${className}`} src={avatar} alt="avatar-person" />
        <p className={className}>{fullName}</p>
      </section>

      <p className="profession">{profession}</p>
      <p className="description">{description}</p>
    </main>
  );
}

export default PhotoBox;
