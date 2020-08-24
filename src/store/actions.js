const actions={
    addCart(context,payload){
        //判断商品在不在购物车里面
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