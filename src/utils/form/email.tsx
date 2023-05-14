/* eslint-disable import/no-named-as-default-member */
import emailJs from "@emailjs/browser";
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "../envVariables";

export const sendEmailWithForm = async (form: HTMLFormElement) => {
  const response = await emailJs.sendForm(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    form,
    EMAIL_PUBLIC_KEY
  );
  console.log("response after sending email", response);
};

export const sendEmailWithData = async (templateParams: any) => {
  try {
    console.log("Service ID", EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY);
    const response = await emailJs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    );
    console.log("response after sending email", response);
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
