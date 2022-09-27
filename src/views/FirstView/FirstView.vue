<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 17:28:00
 * @FilePath: \blog3.0\src\views\FirstView\FirstView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="aboutBox">
    <bannerView
      :imgUrl="this.img"
      :titleName="this.title"
      ref="banner"
    ></bannerView>
    <div class="mainBox">
      <div class="contentBox">
        <div class="contentTitle">
          <div class="markdown-body">
            <markdown />
          </div>
        </div>
      </div>
      <div :class="locked ? 'asideBoxFix' : 'asideBox'">
        <div class="asideImg">
          <!-- 头像 -->
          <el-avatar
            src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/0d1b2cad168244918d2ee927bb664eb5.jpeg"
            :size="size"
            class="asidePic"
          ></el-avatar>
        </div>
        <div class="asideTile">柴柴</div>
        <div class="asideTile1">老爷保佑！前途无量！</div>
        <el-divider>多开心一点啦</el-divider>
        <!-- 侧边栏底部图片 -->
        <img src="@/assets/huli.gif" alt="" class="bottomImg" />
      </div>
      <div v-if="btnFlag" class="go-top" @click="backTop">
      <!-- 返回顶部图标 -->
        <img src="@/assets/backTop.png" alt="" class="backTopbtn" />
      </div>
    </div>
    <footerView></footerView>
  </div>
</template>

<script>
import bannerView from "@/components/bannerView/index";
import footerView from "@/components/footerView/index.vue";
// md文件地址
import markdown from "../home.md";
import "highlight.js/styles/github.css";
import "github-markdown-css";
export default {
  components: { bannerView, markdown, footerView },
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
    return {
      //侧边栏头像大小
      size:90,
      bannerH: 0,
      locked: false,
      btnFlag: false,
      //导航背景图片
      img: "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg16.jpg",
      // 导航文字说明
      title: "首页",
    };
  },
  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > that.bannerH) {
        that.locked = true;
        that.btnFlag = true;
      } else {
        that.locked = false;
        that.btnFlag = false;
      }
    },
  },
};
</script>

<style <style lang="scss">
.aboutBox {
  height: 100%;
  // 背景图片
  background: url("@/assets/cover.jpg");
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: 110% 100%;
  background-attachment: fixed;
  .mainBox {
    position: relative;
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    .contentBox {
      width: 71%;
      background: #fff;
      box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
      text-align: left;
      padding: 0 20px;
      margin-bottom: 30px;
    }
    .asideBoxFix {
      position: fixed;
      top: 0px;
      right: 286px;
      box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
      width: 335px;
      height: 55vh;
      background: #fff;
      .bottomImg{
        display: block;
        width: 100%;
      }
      .asideImg {
        position: relative;
        width: 100%;
        height: 15vh;
        //侧边栏顶部图片--固定位置后
        background: url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg12.jpg");
        background-position: 0 -70px;
        background-size: cover;
        .asidePic {
          border: 4px solid rgb(241, 241, 241);
          position: absolute;
          margin: 0 auto;
          left: 50%;
          bottom: -38px;
          transform: translate(-50%);
        }
      }
      .asideTile {
        padding: 0 20px;
        color: rgb(51, 51, 51);
        margin-top: 45px;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 3px;
      }
      .asideTile1 {
        padding: 0 20px;
        color: rgb(51, 51, 51);
        margin-top: 10px;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 3px;
      }
    }
    .asideBox {
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
      width: 25%;
      background: #fff;
      .bottomImg{
        display: block;
        width: 100%;
      }
      .asideImg {
        position: relative;
        width: 100%;
        height: 15vh;
        // 侧边栏顶部图片--原始
        background: url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg12.jpg");
        background-position: 0 -70px;
        background-size: cover;
        .asidePic {
          border: 4px solid rgb(241, 241, 241);
          position: absolute;
          margin: 0 auto;
          left: 50%;
          bottom: -38px;
          transform: translate(-50%);
        }
      }
      .asideTile {
        padding: 0 20px;
        color: rgb(51, 51, 51);
        margin-top: 45px;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 3px;
      }
      .asideTile1 {
        padding: 0 20px;
        color: rgb(51, 51, 51);
        margin-top: 10px;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 3px;
      }
    }
  }
  .go-top {
    z-index: 99999999;
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    //返回顶部图片
    background: url("@/assets/bg6.jpg");
    background-size: cover;
    bottom: 50px;
    right: 50px;
    .backTopbtn {
      margin: 10px auto;
    }
  }
}
</style>>
