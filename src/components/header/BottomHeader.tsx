//? icons 
import { LuMenu } from 'react-icons/lu';

function BottomHeader() {
    return (
        <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
            <p className='flex items-center gap-1 h-8 header-item-wrapper'>
                <LuMenu className='text-xl'/> All
            </p>
            <p className='hidden md:inline-flex items-center h-8 header-item-wrapper'>
                Today Deals
            </p>
            <p className='hidden md:inline-flex items-center h-8 header-item-wrapper'>
                Customer Service
            </p>
            <p className='hidden md:inline-flex items-center h-8 header-item-wrapper'>
                Registry
            </p>
            <p className='hidden md:inline-flex items-center h-8 header-item-wrapper'>
                Gift Cards
            </p>
            <p className='hidden md:inline-flex items-center h-8 header-item-wrapper'>
                Sell
            </p>
            <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 duration-300 cursor-pointer'>
                Sign Out
            </p>
        </div>  
    )
}

export default BottomHeader