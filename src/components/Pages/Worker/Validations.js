import { object, string, number, date, InferType } from "yup";

const validations = object({
  name: string().required(),
  email: string().email().required(),
  // email: yup.string().email().required("Zorunlu Alan"),
  // firstName: yup.string().required(),
  // lastName: yup.string().required("Zorunlu Alan"),
  // age: yup.string().required("Zorunlu Alan"),
  // passWordConfirms: yup
  //   .string()
  //   .oneOf([yup.ref("password")])
  //   .required("Zorunlu Alan"),
});

export default validations;
