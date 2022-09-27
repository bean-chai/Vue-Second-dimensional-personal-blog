<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:54:27
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 16:25:29
 * @FilePath: \blog3.0\src\views\BlogView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="blogBox">
  <bannerView :imgUrl="this.img" :titleName="this.title"></bannerView>
  </div>
</template>

<script>
import bannerView from '@/components/bannerView/index.vue'
export default {
 components: {bannerView},
  data() {
  return{
    img:'http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg17.jpg',
    title: '博客'
  }
 }
};
</script>

<style <style lang="scss">

</style>>