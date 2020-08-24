const mutations={
    addNewCart(state,payload){
        state.cartList.push(payload);
    },
    addCounter(state,payload){
        payload.count++;
    }
}

export default mutations