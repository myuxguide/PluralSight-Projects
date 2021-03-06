export interface IProductHeader{
    tHeadings: string
}

export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

export interface IProductPage{
    pageTitle: string;
    imageWidth: number;
    btnWidth:number;
    showImage: boolean;
    listFilter: string;
}