import { IGallery } from "../interfaces/gallery.interface";

export const LXGallery: IGallery[] = [
    {
        title: 'Illustrations',
        description: 'full render',
        items: [
            {
                title: 'Meteor Strike',
                name: 'illustration-meteor-strike',
                altText: '',
                url: 'assets/art/draw_ayra.png'
            },
            {
                title: 'Death From Above',
                name: 'illustration-death-from-above',
                altText: '',
                url: 'assets/art/draw_edward.png'
            },
            {
                title: '24 Hour Judgement',
                name: 'illustration-24-hr-judgement',
                altText: '',
                url: 'assets/art/draw_24hrjudgement.png'
            },
            {
                title: 'Shannan\'s Training',
                name: 'illustration-shannans-training',
                altText: '',
                url: 'assets/art/draw_ayrashannan.png'
            },
            {
                title: 'Dark Blade of Od',
                name: 'illustration-dark-blade-of-od',
                altText: '',
                url: 'assets/art/draw_galzus.png'
            },
            {
                title: 'Hell Stew Eagles',
                name: 'illustration-hell-stew-eagles',
                altText: '',
                url: 'assets/art/draw_hellstewbert.png'
            },
            {
                title: 'Carefree Saint',
                name: 'illustration-carefree-saint',
                altText: '',
                url: 'assets/art/draw_laura.png'
            },
            {
                title: 'Njörun',
                name: 'illustration-njorun',
                altText: '',
                url: 'assets/art/draw_njorun.png'
            },
            {
                title: 'Beyond the River',
                name: 'illustration-beyond-the-river',
                altText: '',
                url: 'assets/art/draw_reinolwen.png'
            },
            {
                title: 'Two Sword Princes',
                name: 'illustration-two-sword-princes',
                altText: '',
                url: 'assets/art/draw_ryoshan.png'
            }
        ]
    },
    {
        title: 'Character Design',
        description: '',
        items: [
            {
                title: 'Glamrock Meteor',
                name: 'illustration-glamrock-meteor',
                altText: '',
                url: 'assets/art/design_glamayra.png'
            },
            {
                title: 'Character Design 1',
                name: 'illustration-destin',
                altText: '',
                url: 'assets/art/design_destin.png'
            },
            {
                title: 'Character Design 2',
                name: 'illustration-essa',
                altText: '',
                url: 'assets/art/design_essa.png'
            },
            {
                title: 'Character Design 3',
                name: 'design-thyra',
                altText: '',
                url: 'assets/art/design_thyra1.png',
                collectionConfig: {
                    title: 'Thyra Designs',
                }
            },
            {
                title: 'Thyra Armored',
                name: 'design-thyra',
                altText: '',
                url: 'assets/art/design_thyra2.png'
            }
        ]
    },
    {
        title: 'Vector Art',
        description: '',
        items: [
            {
                title: 'Bunny Logos',
                name: 'vector-bunny-logos',
                altText: 'Images of a fat rabbit and an alternate version where it\'s using a computer. They are the logos of this site.',
                url: 'assets/art/logo_bunbun.png'
            },
            {
                title: 'Rocket Logo',
                name: 'vector-rocket-logo',
                altText: '',
                url: 'assets/art/logo_ae.png'
            }
        ]
    }

];

export const LXGalleryMap = LXGallery.reduce((mappedItems, section) => {
    section.items.forEach(item => {
        const galleryItem = mappedItems[item.name] || { mainItems: [] };
        if (item.collectionConfig) {
            galleryItem.data = { title: item.collectionConfig.title, description: item.collectionConfig.description };
            galleryItem.subItems = item.collectionConfig.additionalItems;
        }
        else if (!galleryItem.data) {
            galleryItem.data = {title: item.title, description: item.description};
        }
        galleryItem.mainItems.push(item);
        mappedItems[item.name] = galleryItem;
    });
    return mappedItems;
}, {});
