import { GraphQLClient } from "graphql-request"

const STORY_BLOK_GRAPHQL_ENDPOINT = 'https://gapi.storyblok.com/v1/api'
export const createStoryClient = (preview?:boolean) => {
    return new GraphQLClient(STORY_BLOK_GRAPHQL_ENDPOINT, {
        headers: {
            token: String(process.env.NEXT_PUBLIC_STORY_BLOK_ACCESS_TOKEN),
            version: "draft",
        }
    })
}

export const StoryBlokApi = createStoryClient(false);