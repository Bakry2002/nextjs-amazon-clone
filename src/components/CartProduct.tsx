import Image from "next/image";
import { formattedPrice } from './../helper';

//? icons 
import { LuMinus, LuPlus } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

//? redux-react hooks
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProduct, increaseQuantity, resetCart } from "@/store/nextSlice";

//? typescript types
interface productProps {
    _id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    quantity: number;
}

interface CartProductsProps {
    product: productProps;
}
const CartProduct = ({ product }: CartProductsProps) => {
    const dispatch = useDispatch();

    return (
        <div className='bg-gray-100 rounded-lg flex items-center gap-4'>
            <Image 
                src={product.image}
                alt="productImage"
                width={150}
                height={150}
                className='object-cover'
            />
            <div className="flex items-center px-2 gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-amazon_blue">{product.title}</p>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-sm text-gray-600">
                        Unit Price:{" "}
                        <span className="font-semibold text-amazon_blue">
                            {formattedPrice({amount: product.price})}
                        </span>
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                            <span 
                                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                                onClick={() => dispatch(increaseQuantity({
                                    _id: product._id ,
                                    title: product.title ,
                                    brand: product.brand ,
                                    category: product.category ,
                                    description: product.description ,
                                    image: product.image ,
                                    isNew: product.isNew ,
                                    oldPrice: product.oldPrice ,
                                    price: product.price,
                                    quantity: 1,
                                }))}
                            >
                                <LuPlus/>
                            </span>
                            <span>{product.quantity}</span>
                            <span 
                                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                                onClick={() => dispatch(decreaseQuantity({
                                    _id: product._id ,
                                    title: product.title ,
                                    brand: product.brand ,
                                    category: product.category ,
                                    description: product.description ,
                                    image: product.image ,
                                    isNew: product.isNew ,
                                    oldPrice: product.oldPrice ,
                                    price: product.price,
                                    quantity: 1,
                                }))}
                            >
                                <LuMinus/>
                            </span>
                        </div>
                        <div 
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 duration-300 cursor-pointer"
                            onClick={() => dispatch(deleteProduct(product._id))}
                        >
                            <IoMdClose className="mt-[2px]" /> <p>remove</p>
                        </div>
                    </div>
                </div>
                <div className="text-lg font-semibold text-amazon_blue">
                    { formattedPrice({amount: product.price * product.quantity}) } 
                </div>
            </div>
        </div>
    )
}

export default CartProduct