import { GRAPHCMS_ENDPOINT, GRAPHCMS_MUTATION_TOKEN, GRAPHCMS_TOKEN, GRAPHCMS_TOKEN_PREVIEW } from "../utils/envVariables"
import {GraphQLClient, Variables} from "graphql-request"
import { Hygraph } from "./clients/hygraph"
import { createStoryClient } from "./clients/storyblok"

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(GRAPHCMS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${preview ? GRAPHCMS_TOKEN_PREVIEW: GRAPHCMS_TOKEN}`
        }
    })
}

export const hygraph = new Hygraph(false); 

interface GraphQlFetcherArg {
    query: string,
    variables?: Variables,
    preview?: boolean
}

export function hygraphFetcher(args: GraphQlFetcherArg) {
    return createHygraphClient(false).request(args.query, args.variables)
}

export function storyBlokFetcher(args: GraphQlFetcherArg) {
    return createStoryClient(args.preview || false).request(args.query, args.variables)
}


export const hygraphFormSubmitClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${GRAPHCMS_MUTATION_TOKEN}`
    }
})
