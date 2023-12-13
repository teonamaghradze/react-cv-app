import React from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "./skillsSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./SkillForm.scss";

const SkillForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    skillName: "",
    skillRange: "",
  };
  const validationSchema = Yup.object().shape({
    skillName: Yup.string().required("Skill name is a required field"),

    skillRange: Yup.number()
      .typeError("Skill range must be a 'number' type")
      .required("Skill range is a required field")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });

  const onSubmit = (values, { resetForm }) => {
    fetch("api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addSkill(data.skills));
        resetForm();
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form>
          <div>
            <label htmlFor="skillName">Skill name</label>
            <Field
              type="text"
              id="skillName"
              name="skillName"
              placeholder="Enter skill name"
              className={`${
                errors.skillName && touched.skillName ? "field-error" : ""
              }`}
            />
            <ErrorMessage name="skillName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="skillRange">Skill range</label>
            <Field
              type="text"
              id="skillRange"
              name="skillRange"
              placeholder="Enter skill range"
              className={`${
                errors.skillRange && touched.skillName ? "field-error" : ""
              }`}
            />
            <ErrorMessage name="skillRange" component="div" className="error" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={isValid ? "valid-button" : "btn"}
          >
            Add skill
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillForm;
