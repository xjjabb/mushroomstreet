const actions={
    addCart(context,payload){
        //判断商品在不在购物车里面 在就数量加一 不在就添加新商品到购物车
       return new  Promise((resolve,reject)=>{
            let product=context.state.cartList.find((item)=>{
                return item.iid===payload.iid;
            });
            if(product){
                context.commit('addCounter',product);
                resolve('当前的数量+1');
            }else {
                payload.count=1;
                context.commit('addNewCart',payload);
                resolve('添加新的商品');
            }
       })
    }
}

export default actions