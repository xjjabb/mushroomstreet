<template>
  <div id="detailgoodsparam" v-if="Object.keys(goodsParams).length!==0">
      <ul class="sizes">
          <li v-for="(itemArray,i) in goodsParams.sizes[0]" :key="i">
              <div class="sizes_rows">
                  <span v-for="(item,index) in itemArray" :key="index">
                      {{item}}
                  </span>
              </div>
          </li>
      </ul>
      <ul class="infos">
          <li v-for="(item,index) in goodsParams.infos" :key="index">
              <div class="infos_rows">
                  <span>{{item.key}}</span>
                  <span>{{item.value}}</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'DetailGoodsParam',
    props: {
        goodsParams: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
#detailgoodsparam {
    max-width: 640px;
    min-width: 320px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
}
.sizes li {
    padding: 15px 0;
    margin: 0 10px;
    border-bottom: 1px solid #ccc;
}
.sizes_rows {
    display: flex;
    width: 100%;
    
}
.sizes_rows span:nth-child(1) {
    flex: 20%;
}
.sizes_rows span:nth-child(n+2) {
    flex: 1;
    text-align: center;
}
.infos li {
    padding: 15px 0;
    margin: 0 10px;
    border-bottom: 1px solid #ccc;
}
.infos_rows {
    display: flex;
}
.infos_rows span:nth-child(1) {
    flex: 40%;
}
.infos_rows span:nth-child(2) {
    flex: 60%;
    color: #eb4868;
}
</style>