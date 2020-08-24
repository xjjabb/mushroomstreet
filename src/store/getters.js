const getters={
    cartListLength(state){
        return state.cartList.length;
    },
    getCartList(state){
        return state.cartList;
    }
}

export default getters