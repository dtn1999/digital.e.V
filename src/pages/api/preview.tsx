import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { createStoryClient } from "@app/lib/clients/storyblok";
const NEXT_PREVIEW_TOKEN = String(process.env.NEXT_PREVIEW_TOKEN);

const StoryblokApi = createStoryClient(false);

export default async function handlePreviewRequests(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const { secret } = req.query;
  let { slug } = req.query;

  if (secret !== NEXT_PREVIEW_TOKEN || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `id` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const query = gql`
    query Links($starts_with: String) {
      Links(starts_with: $starts_with) {
        items {
          id
          isFolder
          slug
        }
      }
    }
  `;

  const {
    Links: {
      items: [data],
    },
  } = await StoryblokApi.request(query, {
    starts_with: `${slug}`,
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!data) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  if (data.isFolder) {
    return res.status(400).json({ message: "Folder cannot be previewed" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    slug: data.slug,
  });

  const cookies = res.getHeader("Set-Cookie") || [];
  res.setHeader(
    "Set-Cookie",
    // @ts-ignore
    cookies.map((cookie) =>
      cookie.replace("SameSite=Lax", "SameSite=None;Secure")
    )
  );
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // use type name to redirect to the right preview page

  res.redirect(`/${data.slug}`);
}
