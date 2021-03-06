import {request} from './index.js'

//请求商品详情信息
export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//请求推荐信息
export function getRecommend(){
    return request({
        url: '/recommend'
    })
}

//商品基本信息
export class Goods {
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title;
        this.desc=itemInfo.desc;
        this.newPrice=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.realPrice=itemInfo.lowNowPrice;
        this.columns=columns;
        this.services=services;
    }
}

//店铺信息
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods;
    }
}

//商品规格
export class GoodsParam {
    constructor(info,rule){
        this.image=info.images?info.images[0]:'';
        this.infos=info.set;
        this.sizes=rule.tables;
    }
}