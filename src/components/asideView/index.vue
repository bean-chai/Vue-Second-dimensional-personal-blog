<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-27 09:56:25
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 10:57:22
 * @FilePath: \blog3.0\src\components\asideView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
    <div :class="locked ? 'asideBoxFix' : 'asideBox'">
        <div class="asideImg">
          <el-avatar
            src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/0d1b2cad168244918d2ee927bb664eb5.jpeg"
            :size="90"
            class="asidePic"
          ></el-avatar>
        </div>
        <div class="asideTile">柴柴</div>
        <div class="asideTile1">老爷保佑！前途无量！</div>
        <el-divider>开心一点啦</el-divider>
        <img src="@/assets/huli.gif" alt="" />
      </div>
</template>

<script>
export default {
     mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.$nextTick(() => {
      let $ele = this.$refs.banner;
      this.bannerH = $ele.$el.offsetHeight;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
data() {
    return{
              bannerH: 0,
      locked: false,
    }
},
methods: {
        scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop - that.bannerH > 0) {
        that.locked = true;
        that.btnFlag = true;

      } else {
        that.locked = false;
        that.btnFlag = false;

      }
   
    },
}
}
</script>

<style>

</style>