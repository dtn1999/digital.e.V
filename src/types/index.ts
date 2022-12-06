import React from "react";
import { Asset } from "./graphql";

export interface BaseProps{
    className?: string;
    children?: React.ReactNode
}

export interface PageProps{
    layout: {
        navBar: any,
        footer: any
        socialHandles: any[]
    },
}


export interface TAsset extends Pick<Asset,"url" | "width" | "height" | "size">{
   id?:string;
   alt?:string;
}

export interface SocialHandle {
    id?: string;
    name: "facebook" | "twitter" | "instagram" | "tiktok";
    url: string;
}

export interface TCarouselSlide {
    id: string;
    url: string;
    title: Title,
    description: string;
    cta: {
        url: string ;
        label: string;
    },
    overlayOpacity?: number;
}

export interface Title {
    id: string;
    underline?: boolean;
    underlineAlign?: "left" | "center";
    value: any[];
}
