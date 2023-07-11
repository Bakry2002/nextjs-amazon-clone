import { formattedPrice } from "@/helper";
import { addToCart, deleteFromFavorite } from "@/store/nextSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";


interface Product {
    _id: number; 
    brand: string;
    category: string;
    description: string;
    image: string; 
    isNew: boolean;
    oldPrice: number;
    price: number; 
    title: string;
    quantity: number;
}
interface FavoriteProductProps {
    product: Product;
}


const FavoriteProduct = ({product}: FavoriteProductProps) => {
    const dispatch = useDispatch(); 

    return (
        <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2'>
            <Image 
                src={product.image}
                alt='PRoduct image'
                width={150}
                height={150}
            />
            <div className="flex items-center px-2 gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold to-amazon_blue">{product.title}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-600">
                        Unit Price:{" "}
                        <span className="font-semibold to-amazon_blue">
                            {formattedPrice({amount: product.price})}
                        </span>
                    </p>
                    <button 
                        className="w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2"
                        onClick={() => 
                                dispatch(
                                    addToCart({
                                        _id: product._id,
                                        brand: product.brand,
                                        category: product.category,
                                        description: product.description,
                                        image: product.image,
                                        isNew: product.isNew,
                                        oldPrice: product.oldPrice,
                                        price: product.price,
                                        title: product.title,
                                        quantity: 1,
                                    }) 
                                ) && dispatch(deleteFromFavorite(product._id))
                            }
                        >
                            Add To Cart
                    </button>
                </div>
                <div className="text-lg font-semibold text-amazon_blue">
                    { formattedPrice({amount: product.price}) } 
                </div>
            </div>      
        </div>
    )
}

export default FavoriteProduct