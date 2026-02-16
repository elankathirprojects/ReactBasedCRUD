import * as yup from "yup";

export const userSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required")
});
