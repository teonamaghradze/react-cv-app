import React from "react";
import { feedbackData } from "../textData";
import "./Feedbacks.scss";

function Feedback() {
  return (
    <section className="feedbacks-container">
      {feedbackData.map((el, i) => (
        <main key={el.id} className="feedback-box">
          <p>{el.txt}</p>

          <div className="person-box">
            <img src={el.img} alt="person avatar" />
            <div className="profession">
              <span>{el.profession}</span>
              <span>{el.site}</span>
            </div>
          </div>
        </main>
      ))}
    </section>
  );
}

export default Feedback;
