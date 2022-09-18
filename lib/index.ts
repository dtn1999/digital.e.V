import { GRAPHCMS_ENDPOINT, GRAPHCMS_MUTATION_TOKEN, GRAPHCMS_TOKEN, GRAPHCMS_TOKEN_PREVIEW } from "@app/utils/envVariables"
import {GraphQLClient, Variables} from "graphql-request"

export const createHygraphClient = (preview:boolean) => {
    return new GraphQLClient(GRAPHCMS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${preview ? GRAPHCMS_TOKEN_PREVIEW: GRAPHCMS_TOKEN}`
        }
    })
}

export const hygraph = createHygraphClient(false)

interface HygraphFetcherArg {
    query: string
    variables?: Variables
}

export function hygraphFetcher(args: HygraphFetcherArg) {
    return hygraph.request(args.query, args.variables)
}

export const hygraphFormSubmitClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${GRAPHCMS_MUTATION_TOKEN}`
    }
})
