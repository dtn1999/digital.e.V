import { GetCollaboratorCardsQuery, GetPageLayoutQuery, LayoutFragment, Locale, GetEventInfoQuery, PageSlugFragment } from "@app/types/graphql";
import { GraphQLClient } from "graphql-request"
import { createHygraphClient } from "..";
import pluralize from "pluralize";
import { DynamicPageSlugQuery } from "../graphql/queries/pages/slugs";
import { PageContentQuery } from "../graphql/queries/pages/content";
import { PageLayoutQuery } from "../graphql/queries/pages/layout";
import { CollaboratorsQuery } from "../graphql/queries/collaborators";
import { EventInfoQuery } from "../graphql/queries/events";
import { ProjectPageContentQuery } from "../graphql/queries/pages/project";

export class Hygraph {
    private _client: GraphQLClient;
    constructor(preview: boolean) {
        this._client = createHygraphClient(preview);
    }

    public async slugs(resource: string){
        const resources = pluralize(resource);
        const query = `
            query {
                ${resources}{
                    slug
                }
            }`;
       const data = await this._client.request(query); 
       return data[resources].map((item:any) => item.slug) as string[];
    }

    public async pageSlugs(){
        const {pages} = await this._client.request(DynamicPageSlugQuery);
        return (pages as PageSlugFragment[]).map(page => page.slug); 
    }

    public async page(slug: string, locale: Locale, query?: string) {
        const data = await this._client.request(query ?? PageContentQuery, {slug, locale});
        return data; 
    }
    
    public async layout(locale:Locale) {
        const {layouts,associationDetailss:details } = await this._client.request(PageLayoutQuery, {locale}) as GetPageLayoutQuery;
        return {
            layout: {
                ...(layouts[0] as LayoutFragment),
                footer: details[0]
            } ,
            socialHandles: details[0].socialHandles,
        };
    }
    public async collaborators(locale:Locale){
        const {collaborators} = await this._client.request(CollaboratorsQuery, {locale}) as GetCollaboratorCardsQuery;
        return collaborators;
    }
    public async event(slug: string, locale: Locale){
        const {event} = await this._client.request(EventInfoQuery, {slug, locale}) as GetEventInfoQuery;
        return event;
    }
    public async project(slug: string, locale: Locale, projectSlug: string){
        return await this._client.request(ProjectPageContentQuery, {slug, locale, projectSlug});
    }
}
