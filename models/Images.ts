export interface Image {
    imageUrl: string,
    altText: string
}

export interface CategoryImage extends Image {
    categoryTitle: string,
    slug: string
};

