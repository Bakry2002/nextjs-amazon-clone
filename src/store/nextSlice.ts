import { createSlice } from '@reduxjs/toolkit';
import { StoreProps } from '../../type';

interface InitialStateProps {
    productData: StoreProps[];
    favoriteData: StoreProps[];
    allProducts: StoreProps[];
    userInfo: null | string;
}

const initialState: InitialStateProps = {
    productData: [],
    favoriteData: [],
    allProducts: [],
    userInfo: null,
}

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if the product is already in the cart to avoid duplicates and update the quantity
            const existingProduct = state.productData.find((product : StoreProps) => product._id === action.payload._id) 
            if (existingProduct){
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload); 
            }
        }, 
        addToFavorite: (state, action) => {
            const existingProduct = state.favoriteData.find((product : StoreProps) => product._id === action.payload._id); 
            if (existingProduct) {
                return state; 
            } else {
                state.favoriteData.push(action.payload);
            }
        }, 
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((product : StoreProps) => product._id === action.payload._id);
            existingProduct && existingProduct.quantity++; // If the product exists, increase the quantity 
        }, 
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find((product : StoreProps) => product._id === action.payload._id);
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1; // If the quantity is 1, don't decrease it
            } else {
                existingProduct!.quantity--; // if the quantity is more than 1, decrease it
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter((product) => product._id !== action.payload);
        }, 
        deleteFromFavorite: (state, action) => {
            state.favoriteData = state.favoriteData.filter((product) => product._id !== action.payload);
        }, 
        resetCart: (state) => {
            state.productData = [];
        }, 
        resetFavorite: (state) => {
            state.favoriteData = [];
        }, 
        addUser: (state, action) => {
            state.userInfo = action.payload;
        }, 
        removeUser: (state) => {
            state.userInfo = null;
        }, 
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        }
    }
})

export default nextSlice.reducer;
export const { 
    addToCart, 
    addToFavorite, 
    increaseQuantity, 
    decreaseQuantity, 
    deleteProduct,
    deleteFromFavorite, 
    resetCart, 
    resetFavorite,
    addUser, 
    removeUser, 
    setAllProducts 
} = nextSlice.actions;


//Notes: 

// Different between ?. and !. :- 
// (?.) is called optional chaining. It is used to avoid errors when accessing properties of an object that is null or undefined.
// (!.) is called non-null assertion operator. It is used to tell the compiler that the value is not null or undefined.