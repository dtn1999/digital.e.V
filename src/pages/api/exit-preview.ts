import { createStoryClient } from "@app/lib/clients/storyblok";
import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
const NEXT_PREVIEW_TOKEN = String(process.env.NEXT_REVIEW_TOKEN);

const StoryblokApi = createStoryClient(false);

export default async function handlePreviewRequests(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const { secret, slug } = req.query;

  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // set the cookies to None
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    // @ts-ignore 
    cookies.map((cookie) =>
      cookie.replace("SameSite=Lax", "SameSite=None;Secure")
    )
  );

  // Redirect the user back to the index page.
  res.redirect(`/${slug}`);
}