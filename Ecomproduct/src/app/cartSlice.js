import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items : JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice : JSON.parse(localStorage.getItem('totalPrice')) || 0, 
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const product =  action.payload;
            const existingProduct  = state.items.findIndex(item => item.id === product.id)
            // console.log(existingProduct);
            if(existingProduct !== -1){
                state.items[existingProduct].count += 1;
                state.totalPrice += product.price;
            } else {
                state.items.push({...product, count : 1});
                state.totalPrice  += product.price;
            }
            //save to loaclstorage whenever the cart is updated
            localStorage.setItem('cart', JSON.stringify(state.items));
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const productIndex = state.items.findIndex(item => item.id === productId);

            if(productIndex !== -1){
                if(state.items[productIndex].count > 1){
                    state.items[productIndex].count -= 1;
                } else{
                    state.items.splice(productIndex, 1);
                }
                // const product = state.items[productIndex];
                // state.totalPrice -= product.price * product.count;
                // state.items.splice(productIndex, 1);
            }
            //save to loaclstorage whenever the cart is updated
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }

});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;