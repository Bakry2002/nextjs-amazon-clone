
import { useSelector } from "react-redux"
import { StateProps, StoreProps } from "../../type";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavoriteProducts from "@/components/ResetFavoriteProducts";
import Link from "next/link";

const FavoritePage = () => {
    const { favoriteData } = useSelector((state: StateProps) => state.next);
    return (
        <div className="max-w-screen-xl mx-auto px-6 gap-10 py-4">
            {
                favoriteData.length > 0 ? (
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between border-b-[1px] border-gray-400 pb-1">
                            <p className="text-2xl font-semibold to-amazon_blue">Favorite Products</p>
                            <p className="text-lg font-semibold to-amazon_blue">Action</p>
                        </div>
                        <div>
                            {
                                favoriteData.map((product: StoreProps) => (
                                    <div key={product._id} className="mt-2">
                                        <FavoriteProduct product={product}/>
                                    </div>
                                ))
                            }
                            <ResetFavoriteProducts/>
                        </div>
                    </div>
                ) : (
                    <div className='bg-white h-96 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
                        <h1>
                            You have no favorite products
                        </h1>
                        <Link href='/'>
                            <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-medium hover:bg-amazon_yellow hover:text-black duration-300 mt-4'>Go to shopping</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default FavoritePage