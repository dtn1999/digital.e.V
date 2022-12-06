import { NextApiRequest, NextApiResponse } from "next";
import { getPlaiceholder } from "plaiceholder";

export default async function handlePreviewRequests(req: NextApiRequest, res:NextApiResponse) {
  const { uri } = JSON.parse(req.body);
  const { base64, img } = await getPlaiceholder(uri);
  res.status(200).send( { ...img, blurDataURL: base64,});
};