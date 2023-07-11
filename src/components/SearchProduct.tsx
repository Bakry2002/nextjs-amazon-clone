/* eslint-disable @next/next/no-img-element */

import { formattedPrice } from "@/helper";

interface props {
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
type Product = {
    product: props;
}
const SearchProduct = ({product}: Product) => {
    return (
        <div className="flex items-center gap-4">
            <img 
                className='w-24' 
                src={product.image} 
                alt="product image"                                                             
            />
            <div className=''>
                <p className="text-xs -mb-1">
                    {product.brand}_{product.category}
                </p>
                <p className="text-lg font-medium">{product.title}</p>
                <p className="text-xs">{product.description.substring(0, 100)}</p>
                <p className="text-base text-gray-600 flex items-center gap-1">
                    Price:{" "}
                    <span className='font-semibold'>
                        {formattedPrice({amount: product.price})}
                    </span>
                    <span className='text-gray-600 line-through'>
                        {formattedPrice({amount: product.oldPrice})}
                    </span>
                </p>
            </div>
            <div className="flex-1 text-right px-4">
                <p className='text-base font-semibold text-amazon_blue animate-bounce'>
                    Save:{" "}
                    <span>
                        {formattedPrice({amount: product.oldPrice - product.price})}
                    </span>
                </p>
            </div>
        </div>

    )
}

export default SearchProduct