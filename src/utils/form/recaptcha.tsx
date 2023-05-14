export const submitEnquiryForm = async (gReCaptchaToken: string) => {
  const response = await fetch("/api/recaptcha-validation", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gRecaptchaToken: gReCaptchaToken,
    }),
  });
  const responseData = (await response.json()) as any;
  return responseData;
};

export const validateRecaptcha = async (
  secret: string,
  gReCaptchaToken: string
) => {
  const reCaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${gReCaptchaToken}`,
    }
  );
  return reCaptchaRes.json();
};
