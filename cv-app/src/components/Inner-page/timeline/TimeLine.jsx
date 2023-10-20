// import React from "react";
// import { timeLineData } from "../textData";
// import "./TimeLine.scss";

// import makeServer from "../../../services/server";

// function TimeLine() {
//   const server = makeServer();

//   server.logging = true;

//   fetch("/api/educations")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

//   const timelineElements = timeLineData.map((el, i) => (
//     <main className="timeline-container" key={i}>
//       <h4>{el.date}</h4>
//       <section>
//         <h3>{el.title}</h3>
//         <p>{el.text}</p>
//       </section>
//     </main>
//   ));

//   return <div className="timeline">{timelineElements}</div>;
// }

// export default TimeLine;

import React, { useEffect, useState } from "react";
import "./TimeLine.scss";

function TimeLine() {
  const [educations, setEducations] = useState([]);

  // useEffect(() => {
  //   // Fetch education data when the component mounts
  //   fetch("/api/educations")
  //     .then((res) => res.json())
  //     .then((data) => setEducations(data))
  //     .catch((err) => console.error(err));
  // }, []);

  const timelineElements = educations.map((el, i) => (
    <main className="timeline-container" key={i}>
      <h4>{el.date}</h4>
      <section>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
      </section>
    </main>
  ));

  return <div className="timeline">{timelineElements}</div>;
}

export default TimeLine;
