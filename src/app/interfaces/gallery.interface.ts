import { Observable } from "rxjs";

export interface IGalleryItem { // these don't show up in the main gallery only expanded views
    title?: string;
    url: string;
    altText: string;
    description?: string;
    year?: number;
    image?: HTMLImageElement;
    aspectRatio$?: Observable<string>;
    index?: {
        section: number;
        sectionSelf: number;
        collection: number;
    }
}

export interface IGalleryCollectionConfig {
    title: string;
    additionalItems?: IGalleryItem[];
    description?: string;
}

// items should be sorted by order i want them to appear
// if they're 2 items in the same collection but I want to display them out
// no need to overengineer with stuff like order variables
export interface IGalleryMainItem extends IGalleryItem{
    title: string;
    name: string;
    collectionConfig?: IGalleryCollectionConfig; // having this indicates main item
}

export interface IGallery {
    title: string;
    description: string;
    items: IGalleryMainItem[];
}

export interface IExpandedGalleryData{
    data: {
        title: string;
        description?: string;
    },
    mainItems: IGalleryMainItem[],
    subItems?: IGalleryItem[]
}

export interface IGalleryMap {
    [name: string]: IExpandedGalleryData;
}

export interface IGallerySelection {
    index: number;
    item: IGalleryMainItem;
}
