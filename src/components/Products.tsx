
//? Next components
import Image from 'next/image';

//? typescript types
import { ProductProps } from './../../type.d';

//? icons 
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import { formattedPrice } from './../helper';

//? slices 
import { addToCart, addToFavorite } from '@/store/nextSlice';
//? react-redux hooks
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Products = ({productData} : any) => { // typescript (any) => means any type of data can be passed in
    const dispatch = useDispatch();

    return (
        <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {
                productData.map(({ _id, title, brand, category, description, image, isNew, oldPrice, price } : ProductProps) => (
                    <div key={_id} className='w-full bg-white text-black p-4 border border-gary-300 rounded-lg group overflow-hidden'>
                        <div className='w-full h-[260px] relative'>
                            <Link href={{
                                pathname: `/${_id}`,
                                query: {
                                    title, 
                                    brand, 
                                    category, 
                                    description, 
                                    image, 
                                    isNew, 
                                    oldPrice, 
                                    price, 
                                }
                            }}>
                                <Image 
                                    width={300} height={300} 
                                    src={image} alt='productImage' 
                                    className='w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300'
                                />
                            </Link>
                            <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
                                <span 
                                    className='w-full h-full border border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() => dispatch(addToCart({
                                        _id, 
                                        title, 
                                        brand, 
                                        category, 
                                        description, 
                                        image, 
                                        isNew, 
                                        oldPrice, 
                                        price,
                                        quantity: 1
                                    }))}
                                >
                                    <HiShoppingCart/>
                                </span>
                                <span 
                                    className='w-full h-full border border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() => dispatch(addToFavorite({
                                        _id, 
                                        title, 
                                        brand, 
                                        category, 
                                        description, 
                                        image, 
                                        isNew, 
                                        oldPrice, 
                                        price,
                                    }))}
                                >
                                    <FaHeart/>
                                </span>
                            </div>
                            {
                                isNew && (
                                    <p className='absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce'>
                                        <span>{formattedPrice({amount: oldPrice - price})}% OFF</span>
                                    </p>
                                )
                            }
                        </div>
                        <hr/>
                        <div className='px-4 py-3 flex flex-col gap-1'>
                            <p className='text-xs text-gray-500 tracking-wide'>{category}</p>
                            <p className='text-base font-medium'>{title}</p>
                            <p className='flex items-center gap-2'>
                                <span className='text-sm line-through'>{formattedPrice({amount: oldPrice})}</span>
                                <span className='text-amazon_blue font-semibold'>{formattedPrice({amount: price})}</span>
                            </p>
                            <p className="text-sm text-gray-600">
                                {description.substring(0, 120)}
                            </p>
                            <button 
                                className='h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2'
                                onClick={() => dispatch(addToCart({
                                    _id, 
                                    title, 
                                    brand, 
                                    category, 
                                    description, 
                                    image, 
                                    isNew, 
                                    oldPrice, 
                                    price,
                                    quantity: 1
                                }))}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products