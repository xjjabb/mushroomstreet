<template>
  <div id="recommend">
      <ul>
          <li v-for="(item,index) in recommends" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt="">
                  <span>{{item.title}}</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommends: {
            type: Array,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    #recommend {
        padding: 10px 0 15px;
        border-bottom: 6px solid #eee;
    } 
    #recommend ul {
        display: flex;
        width: 100%;
    }
    #recommend ul li {
        flex: 20%;
    }
    #recommend ul li img {
        width: 65px;
        height: 80px;
    }
    #recommend ul li a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #recommend ul a span {
        margin-top: 10px;
    }
</style>