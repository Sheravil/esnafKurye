import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";

function Singup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "***********",
        passWordConfirms: "***********",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div>
      <h1>Handle Formik</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Email </label>
        <input
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="errorText">Email geçerli değil.</div>
        )}
        <br />
        <br />
        <label>Password </label>
        <input
          name="password"
          onChange={handleChange}
          placeholder={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="errorText">{errors.password}</div>
        )}
        <br />
        <br />
        <label>PassWord Confirms </label>
        <input
          name="passWordConfirms"
          onChange={handleChange}
          placeholder={values.passWordConfirms}
          onBlur={handleBlur}
        />
        {errors.passWordConfirms && touched.passWordConfirms && (
          <div className="errorText">Parola eşleşmiyor</div>
        )}
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
        <br />
        <br />
        <br />
      </form>
      )
    </div>
  );
}

export default Singup;
