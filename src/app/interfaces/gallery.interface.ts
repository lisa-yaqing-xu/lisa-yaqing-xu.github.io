export interface IGallerySubItem { // these don't show up in the main gallery only expanded views
    title?: string;
    url: string;
    altText: string;
    description?: string;
}

export interface IGalleryCollectionConfig {
    title: string;
    additionalItems?: IGallerySubItem[];
    description?: string;
}

// items should be sorted by order i want them to appear
// if they're 2 items in the same collection but I want to display them out
// no need to overengineer with stuff like order variables
export interface IGalleryItem {
    title: string;
    name: string;
    url: string;
    altText: string;
    description?: string;
    collectionConfig?: IGalleryCollectionConfig; // having this indicates main item
}

export interface IGallery {
    title: string;
    description: string;
    items: IGalleryItem[];
}

export interface IExpandedGalleryData{
    data: {
        title: string;
        description?: string;
    },
    mainItems: IGalleryItem[],
    subItems?: IGallerySubItem[]
}

export interface IGalleryMap {
    [name: string]: IGalleryItem[];
}

export interface IGallerySelection {
    index: number;
    item: IGalleryItem;
}
