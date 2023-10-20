import React, { useState } from "react";
import "./Portfolio.scss";
import PortfolioInfo from "./PortfolioInfo";
import { portfolioData } from "../textData";

export default function Portfolio() {
  const [allClicked, setAllClicked] = useState(true);
  const [codeClicked, setCodeClicked] = useState(false);
  const [uiClicked, setUiClicked] = useState(false);

  function clickAll() {
    setCodeClicked(() => false);
    setUiClicked(() => false);
    setAllClicked(() => true);
  }

  function clickCode() {
    setCodeClicked(() => true);
    setAllClicked(() => false);
    setUiClicked(() => false);
  }

  function clickUi() {
    setUiClicked(() => true);
    setAllClicked(() => false);
    setCodeClicked(() => false);
  }

  return (
    <main className="portfolio">
      <nav className="buttons">
        <button onClick={clickAll}>All/ </button>
        <button onClick={clickCode}>Code/ </button>
        <button onClick={clickUi}>UI</button>
      </nav>

      <section className="portfolio-container">
        {allClicked &&
          portfolioData.map((el) => (
            <PortfolioInfo
              key={el.id}
              img={el.img}
              title={el.title}
              text={el.txt}
              url={el.url}
            />
          ))}
      </section>

      <section className="portfolio-container">
        {codeClicked &&
          portfolioData
            .filter((el) => el.id <= 2)
            .map((filtered) => (
              <PortfolioInfo
                key={filtered.id}
                img={filtered.img}
                title={filtered.title}
                text={filtered.txt}
                url={filtered.url}
              />
            ))}
      </section>

      <section className="portfolio-container">
        {uiClicked &&
          portfolioData
            .filter((el) => el.id > 2)
            .map((filtered) => (
              <PortfolioInfo
                key={filtered.id}
                img={filtered.img}
                title={filtered.title}
                text={filtered.txt}
                url={filtered.url}
              />
            ))}
      </section>
    </main>
  );
}
