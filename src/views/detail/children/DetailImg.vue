<template>
  <div id="detailimg" v-if="Object.keys(detailImgInfo).length !== 0">
      <div class="start"></div>
      <p>{{detailImgInfo.desc}}</p>
      <div class="end"></div>
      <div class="key">{{detailImgInfo.detailImage[0].key}}</div>
      <ul class="detailimg_images">
        <li v-for="(item,index) in detailImgInfo.detailImage[0].list" :key="index">
          <img :src="item">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'DetailImg',
    props: {
      detailImgInfo: {
        type: Object
      }
    }
}
</script>

<style scoped>
#detailimg {
  max-width: 640px;
  min-width: 320px;
  padding: 20px 0;
}
p {
  padding: 20px 10px;
}
.start, .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
.start {
    float: left;
  }
.end {
    float: right;
  }
.start::before, .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
.end::after {
    right: 0;
  }
.key {
  margin-left: 10px;
  margin-top: 15px;
  font-size: 18px;
  margin-bottom: 15px;
}
.detailimg_images {
  width: 100%;
}
.detailimg_images img{
  width: 100%;
}
</style>