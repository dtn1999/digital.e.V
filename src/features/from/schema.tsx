import * as yup from "yup";

export const contactSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  acceptTerms: yup.boolean().oneOf([true], "Accept Terms is required"),
});
