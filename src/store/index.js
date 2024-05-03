import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from '../store/cart/goodsSlice';
import cartReducer from './good-page/reduser';

export default configureStore({
    reducer: {
        cart: goodsReducer,
        game: cartReducer
    },
});

