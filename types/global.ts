export interface BaseStoryBlockProps {
    children?: React.ReactNode;
    blok: any
}

export interface PageProps{
    layout: {
        navBar: any,
        footer: any
        socialHandles: any[]
    },
}

export interface BaseProps {
    children?: React.ReactNode;
    className?: string;
}