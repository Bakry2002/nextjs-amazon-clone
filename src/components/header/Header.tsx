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
import { useSelector } from 'react-redux';

//? typescript types
import { StateProps } from '../../../type';


function Header() {
    const { productData, favoriteData } = useSelector((state: StateProps) => state.next);
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
                {/* Searchbar */}
                <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                    <input 
                        className='h-full w-full px-2 rounded-md placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
                        type="text" 
                        placeholder='Search in Amazon' 
                    />
                    <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
                        <HiOutlineSearch/>
                    </span>
                </div>
                {/* Signin */}
                <div className='text-xs text-gray-100 flex flex-col justify-center header-item-wrapper'>
                    <p>Hello, sign in</p>
                    <p className='text-white font-bold flex items-center'>
                        Account & Lists{" "}
                        <span>
                            <BiCaretDown/>
                        </span>
                    </p>
                </div>
                {/* Favorite */}
                <div className='text-xs text-gray-100 flex flex-col justify-center header-item-wrapper relative'>
                    <p>Marked</p>
                    <p className='text-white font-bold'>& Favorite</p>
                    {
                        favoriteData.length > 0 && (
                            <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>
                                {favoriteData.length}
                            </span>
                        )
                    }
                </div>
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