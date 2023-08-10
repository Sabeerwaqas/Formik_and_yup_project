import React from "react";
import "./form.css";
import rocket from "../../components/Images/rocket.png";

const Form = () => {
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

export default Form;
