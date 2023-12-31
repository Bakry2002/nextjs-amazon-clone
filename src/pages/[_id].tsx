import { addToCart, addToFavorite } from '@/store/nextSlice';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { formattedPrice } from './../helper';

import { BeatLoader } from 'react-spinners';


const ProductDetailsPage = () => {
    const [ product, setProduct ] = useState<any>({}); 
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const router = useRouter(); 
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
        setProduct(router.query)
    }, [router.query])

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:py-10">
            {
                isLoading ? (
                    <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
                        <p>Loading...</p>
                        <BeatLoader color="#131921" size={40}/>
                    </div>
                ) : (
                    <div className='w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg'>
                        <div className='flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden'>
                            <Image 
                                priority
                                src={product.image} alt="product image" 
                                width={500} height={500}
                            />
                            <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:-translate-x-2 transition-transform duration-300'>
                                <span 
                                    className='w-full h-full border border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() => dispatch(addToCart({
                                        _id: product._id, 
                                        title: product.title, 
                                        brand: product.brand, 
                                        category: product.category, 
                                        description: product.description, 
                                        image: product.image, 
                                        isNew: product.isNew, 
                                        oldPrice: product.oldPrice, 
                                        price: product.price,
                                        quantity: 1
                                    }))}
                                >
                                    <HiShoppingCart/>
                                </span>
                                <span 
                                    className='w-full h-full border border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() => dispatch(addToFavorite({
                                        _id: product._id, 
                                        title: product.title, 
                                        brand: product.brand, 
                                        category: product.category, 
                                        description: product.description, 
                                        image: product.image, 
                                        isNew: product.isNew, 
                                        oldPrice: product.oldPrice, 
                                        price: product.price,
                                    }))}
                                >
                                    <FaHeart/>
                                </span>
                            </div>
                        </div>
                        <div className='md:col-span-2 flex flex-col gap-3 justify-center p-4'>
                            <p className='text-xs md:text-sm text-amazon_blue font-semibold -mb-3'>{product.category}_{product.brand}</p>
                            <h1 className='text-xl md:text-3xl tracking-wide font-semibold'>
                                {product.title}
                            </h1>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <div className="">
                                    <p className="text-base text-gray-600 flex items-center gap-1">
                                        Price:{" "}
                                        <span className='text-lg text-amazon_blue font-semibold'>
                                            {formattedPrice({amount: product.price})}
                                        </span>
                                        <span className='ml-1 line-through'>
                                            {formattedPrice({amount: product.oldPrice})}
                                        </span>
                                    </p>
                                    <p className='text-sm text-gray-500 flex items-center gap-1'>
                                        You Saved:{" "}
                                        <span>
                                            {formattedPrice({amount: product.oldPrice - product.price})}
                                        </span>
                                    </p>
                                    <button 
                                        onClick={() => dispatch(addToCart({
                                            _id: product._id, 
                                            title: product.title, 
                                            brand: product.brand, 
                                            category: product.category, 
                                            description: product.description, 
                                            image: product.image, 
                                            isNew: product.isNew, 
                                            oldPrice: product.oldPrice, 
                                            price: product.price,
                                            quantity: 1
                                        }))}
                                        className="w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow hover:text-amazon_blue duration-300 rounded-lg mt-5 text-base font-semibold">
                                        Add To Cart
                                    </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetailsPage