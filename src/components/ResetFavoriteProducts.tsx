

import { resetFavorite } from '@/store/nextSlice';
import React from 'react'

import { useDispatch } from 'react-redux';

const ResetFavoriteProducts = () => {
    const dispatch = useDispatch();


    const handleResetFavorite = () => {
        const confirmReset = window.confirm('Are you sure you want to reset your Favorite?');
        if (confirmReset) {
            dispatch(resetFavorite());
        } 
    }

    return (
        <button 
            className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
            onClick={handleResetFavorite}
        >
            Reset Favorite
        </button>
    )
}
export default ResetFavoriteProducts