import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email().required("Zorunlu Alan"),
  password: yup.string().min(5).required("Zorunlu Alan"),
  passWordConfirms: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Zorunlu Alan"),
});

export default validations;
