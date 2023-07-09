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
