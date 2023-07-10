import { resetCart } from '@/store/nextSlice';
import React from 'react'

import { useDispatch } from 'react-redux';

const ResetCartBtn = () => {
    const dispatch = useDispatch();


    const handleResetCart = () => {
        const confirmReset = window.confirm('Are you sure you want to reset your cart?');
        if (confirmReset) {
            dispatch(resetCart());
        } 
    }

    return (
        <button 
            className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
            onClick={handleResetCart}
        >
            Reset Cart
        </button>
    )
}

export default ResetCartBtn