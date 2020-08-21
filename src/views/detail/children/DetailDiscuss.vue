<template>
  <div id="detaildiscuss" v-if="Object.keys(discuss).length!=0">
      <div class="discuss_common clearfix">
          <span class="discuss_common_l left">用户评价</span>
          <span class="discuss_common_r right">更多&gt;</span>
      </div>
      <ul class="user_discuss">
        <li>
           <img :src="discuss.list[0].user.avatar" class="userImg">
           <span class="userName">{{discuss.list[0].user.uname}}</span>
        </li>
        <li>
            <p>{{discuss.list[0].content}}</p>
        </li>
        <li>
            <span>{{discuss.list[0].created | showDate}}</span><span class="goodsinfo">{{discuss.list[0].style}}</span>
        </li>
        <li class="doodsImg">
            <img v-for="(item,index) in discuss.list[0].images" :key="index" :src="item"/>
        </li>
      </ul>
  </div>
</template>

<script>
import {dateformat} from 'common/dateformat.js';
export default {
    name: 'DetailDiscuss',
    props: {
        discuss: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        //格式化时间日期
        showDate(value){
            //1讲时间毫秒格式化成日期类
            const date=new Date(value*1000);
            // 2将date进行格式化
            return dateformat(date,'yyyy-MM-dd hh:mm:ss');
        }
    }
}
</script>

<style scoped>
#detaildiscuss {
    max-width: 640px;
    min-width: 320px;
    padding: 20px 10px;
    border-bottom: 5px solid #f2f5f8;
}
.discuss_common {
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    line-height: 22px;
}
.discuss_common_l {
    font-size: 22px;
}
.discuss_common_r {
    font-size: 16px;
}
.user_discuss li {
    padding-top: 20px;
}
.userImg {
    width: 42px;
    border-radius: 21px;
}
.userName {
    margin-left: 15px;
    color: #000;
}
.goodsinfo {
    margin-left: 15px;
}
.doodsImg img{
    width: 60px;
    height: 60px;
    vertical-align: middle;
}
</style>