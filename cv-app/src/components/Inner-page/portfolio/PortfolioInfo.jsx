import React from "react";
import "./PortfolioInfo.scss";

function PortfolioInfo({ title, text, url, img }) {
  return (
    <section className="img-container">
      <img src={img} alt="project" />
      <main className="photo-txt">
        <h3>{title}</h3>
        <p className="img-txt">{text}</p>
        <a href={url}>View resource</a>
      </main>
    </section>
  );
}

export default PortfolioInfo;
