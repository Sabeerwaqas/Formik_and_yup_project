import React from "react";
import "./form.css";
import { useFormik } from "formik";
import rocket from "../../components/Images/rocket.png";
import { signUpSchema } from "../schemas/yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Forms = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm()
      },
    });

  console.log(errors);

  return (
    <>
      {/*Using Flexbox*/}
      <div className="flexbox-parent">
        {/* Flex child 1 */}
        <div className="flex-child-1">
          <div>
            <h1 className="formik-and-yup">Form Using Formik And Yup</h1>
            <hr className="hr" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  value={values.name}
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="form_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  value={values.email}
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="form_email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className="input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  value={values.password}
                  id="password"
                  placeholder="Enter Your Name Here"
                  className="form_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
              <div className="input">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  value={values.confirm_password}
                  id="confirm_password"
                  placeholder="Enter Your Name Here"
                  className="form_confirm_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error">{errors.confirm_password}</p>
                ) : null}
              </div>
              <button type="submit" className="submit_button">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Flex child 2 */}
        <div className="flex-child-2">
          {/* <h1>First Child</h1> */}
          <img className="rocket-img" src={rocket} alt="" />
        </div>
      </div>
    </>
  );
};

export default Forms;
