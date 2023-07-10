import { configureStore } from '@reduxjs/toolkit';

//? redux persist library
import {
    persistStore,
    persistReducer,
    FLUSH,    
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root', // key is required
    version: 1, 
    storage, 
}

const persistedReducer = persistReducer(persistConfig, nextReducer)

//? Slices 
import nextReducer from './nextSlice';

export const store = configureStore({
    reducer: {next: persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})
export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;