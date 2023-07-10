// Declare the types of the fetch API (products)
export interface ProductProps{
    brand: string;
    category: string;
    description: string;
    image: string; 
    isNew: boolean;
    oldPrice: number;
    price: number; 
    title: string;
    _id: number; 
}
export interface StoreProps{
    brand: string;
    category: string;
    description: string;
    image: string; 
    isNew: boolean;
    oldPrice: number;
    price: number; 
    title: string;
    _id: number; 
    quantity: number;
}

export interface StateProps {
    productData: [];
    favoriteData: [];
    userInfo: null | string;
    next: any
}
