const mutations={
    addNewCart(state,payload){
        payload.checked=true;
        state.cartList.push(payload);
    },
    addCounter(state,payload){
        payload.count++;
    },
    //修改选择状态 单选
    updateChecked(state,payload){
        state.cartList[payload].checked=!state.cartList[payload].checked;
    }
}

export default mutations