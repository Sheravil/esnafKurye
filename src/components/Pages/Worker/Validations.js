import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Çok kısa")
    .max(50, "Çok uzun")
    .required("Zorunlu"),
  lastName: Yup.string()
    .min(2, "Çok kısa")
    .max(50, "Çok uzun")
    .required("Zorunlu"),
  email: Yup.string().email("Geçersiz Email").required("Zorunlu"),
  age: Yup.number()
    .min(18, "Yaşınız yeterli değil")
    .max(35, "Yaş geçerli değil.")
    .required("Zorunlu"),
  number: Yup.string()
    .matches(phoneRegExp, "Geçersiz Numara")
    .required("Zorunlu"),
  whereWork: Yup.string()
    .min(1, "Çalıştığınız firmayı giriniz.")
    .required("Zorunlu"),
});

export default SignupSchema;
