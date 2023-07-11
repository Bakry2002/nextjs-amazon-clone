//? Next components
import Image from 'next/image';
import Link from 'next/link';

//? icons 
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';

//? assets 
import logo from '../../images/logo.png'; 
import cartIcon from '../../images/cartIcon.png';

//? redux-react hooks
import { useSelector, useDispatch } from 'react-redux';

//? typescript types
import { StateProps, StoreProps } from '../../../type';

//? next-auth
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from 'react';
import { addUser } from '@/store/nextSlice';
import SearchProduct from '../SearchProduct';


function Header() {
    const dispatch = useDispatch();
    const { productData, favoriteData, userInfo, allProducts } = useSelector((state: StateProps) => state.next);
    const [ allData, setAllData ] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        setAllData(allProducts.allProducts)
    },[allProducts])

    useEffect(() => {
        if (session) {
            dispatch(addUser({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,
            }))
        }
    }, [session])

    // ============ Search area ============
    const [ query, setQuery ] = useState<string>('');
    const [ searchResult, setSearchResult ] = useState<any>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const filteredData = allData.filter((product: StoreProps) => product.title.toLowerCase().includes(query.toLowerCase()))
        setSearchResult(filteredData);
    }, [query])


    return (
        <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
            <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
                {/* Logo */}
                <Link href='/' className='header-item-wrapper flex items-center justify-center'>
                    <Image className='w-28 object-cover mt-1' src={logo} alt="Logo" />
                </Link>
                {/* Delivery */}
                <div className='header-item-wrapper items-center justify-center hidden xl:inline-flex gap-1'>
                    <SlLocationPin/>
                    <div className='text-xs'>
                        <p>Deliver</p>
                        <p className='text-white font-bold uppercase'>USA</p>
                    </div>
                </div>
                {/* Search bar */}
                <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                    <input
                        onChange={handleSearch}
                        value={query} 
                        className='h-full w-full px-2 rounded-md placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
                        type="text" 
                        placeholder='Search in Amazon' 
                    />
                    <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
                        <HiOutlineSearch/>
                    </span>

                    {/* ======== Search result ======== */}
                    {
                        query && (
                            <div className='absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black'>
                                {
                                    searchResult.length > 0 ? (
                                        <>
                                            {
                                                query && searchResult.map((product: StoreProps) => (
                                                    <Link 
                                                        key={product._id}
                                                        className='w-full border-b-[1px] border-gray-400 flex items-center gap-4'
                                                        href={{pathname: `${product._id}`, query:{
                                                            title: product.title, 
                                                            brand: product.brand, 
                                                            category: product.category, 
                                                            description: product.description, 
                                                            image: product.image, 
                                                            isNew: product.isNew, 
                                                            oldPrice: product.oldPrice, 
                                                            price: product.price,
                                                        }}}
                                                        onClick={() => setQuery('')}
                                                    >
                                                        <SearchProduct product={product}/>
                                                    </Link>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <div className='bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg'>
                                            <p className='text-lg font-semibold animate-bounce'>
                                                Nothing is matches with your search keywords. Please try again.
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    {/* ======== Search result ======== */}
                </div>
                {/* Signin */}
                {
                    userInfo ? (
                        <div className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1'>
                            <img src={userInfo.image} alt="userImage" className='w-8 h-8 rounded-full object-cover'/>
                            <div className='text-xs text-gray-100 flex flex-col justify-between'>
                                <p className='text-white font-bold'>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className='text-xs text-gray-100 flex flex-col justify-center header-item-wrapper'
                            onClick={() => signIn()}
                        > 
                            <p>Hello, sign in</p>
                            <p className='text-white font-bold flex items-center'>
                                Account & Lists{" "}
                                <span>
                                    <BiCaretDown/>
                                </span>
                            </p>
                        </div>
                    )
                }
                {/* Favorite */}
                <Link href='/favorite' className='text-xs text-gray-100 flex flex-col justify-center header-item-wrapper relative'>
                    <p>Marked</p>
                    <p className='text-white font-bold'>& Favorite</p>
                    {
                        favoriteData.length > 0 && (
                            <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>
                                {favoriteData.length}
                            </span>
                        )
                    }
                </Link>
                {/* Cart */}
                <Link href="/cart" className='flex items-center header-item-wrapper relative'>
                    <Image 
                        className='w-auto h-8 object-cover' 
                        src={cartIcon} 
                        alt="Cart image" 
                    />
                    <p className='text-xs sxtext-white font-bold mt-3'>Cart</p>
                    <span className='absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold'>
                        {productData ? productData.length : 0}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header