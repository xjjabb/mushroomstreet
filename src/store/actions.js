const actions={
    addCart(context,payload){
        //判断商品在不在购物车里面 在就数量加一 不在就添加新商品到购物车
        let product=context.state.cartList.find((item)=>{
            return item.iid===payload.iid;
        });
        if(product){
            context.commit('addCounter',product)
        }else {
            payload.count=1;
            context.commit('addNewCart',payload);
        }
    }
}

export default actions