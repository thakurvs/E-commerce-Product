import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items : [],
    totalPrice : 0, 
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const product =  action.payload;
            const existingProduct  = state.items.find(item => item.id === product.id)

            if(existingProduct){
                existingProduct.count += 1
                state.items.push({...product, id: product.id})
            } else {
                state.items.push({...product, count : 1, id: product.id});
            }

            state.totalPrice  += product.price;
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const productIndex = state.items.findIndex(item => item.id === productId);

            if(productIndex !== -1){
                const product = state.items[productIndex];
                state.totalPrice -= product.price * product.count;
                state.items.splice(productIndex, 1);
            }
        }
    }

});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;