import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "./TimeLine.scss";
import { useDispatch, useSelector } from "react-redux";
import { addEducations, toggleLoading } from "../timeline/educationSlice";

function TimeLine() {
  const educations = useSelector((state) => state.education.educations);
  const isLoading = useSelector((state) => state.education.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch education data when the component mounts
    dispatch(toggleLoading());
    fetch("/api/educations")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addEducations(data));
        dispatch(toggleLoading());
      })
      .catch((err) => {
        console.error(err);
        dispatch(toggleLoading());
      });
  }, [dispatch]);

  return (
    <div className="timeline">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <ClipLoader color="#36d7b7" />
        </div>
      ) : (
        educations
          .slice()
          .sort((a, b) => +b.date - +a.date)
          .map((el, i) => (
            <main className="timeline-container" key={i}>
              <h4>{el.date}</h4>
              <section>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </section>
            </main>
          ))
      )}
    </div>
  );
}

export default TimeLine;
