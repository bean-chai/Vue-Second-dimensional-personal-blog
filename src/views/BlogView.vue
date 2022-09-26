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