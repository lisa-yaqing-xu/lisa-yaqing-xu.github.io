export interface IGalleryItem{
    title: string;
    name: string;
    url: string;
    altText: string;
    description?: string;   
}

export interface IGallery{    
    title: string,
    description: string,
    items: IGalleryItem[]
}

export interface IGallerySelection{
    index: number, 
    item: IGalleryItem
}
