import { GOOGLE_RECAPTCHA_SECRET_KEY } from "@app/utils/envVariables";
import { validateRecaptcha } from "@app/utils/form/recaptcha";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handlePreviewRequests(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { gRecaptchaToken } = req.body;
      const { score, message } = await validateRecaptcha(
        GOOGLE_RECAPTCHA_SECRET_KEY,
        gRecaptchaToken
      );
      if (score > 0.5) {
        // Save data to the database from here
        res.status(200).json({
          success: true,
          message,
        });
      } else {
        res.status(200).json({
          success: false,
          message,
        });
      }
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
}
