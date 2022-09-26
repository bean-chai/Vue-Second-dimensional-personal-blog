<template>
  <div class="aboutBox">
    <bannerView :imgUrl="this.img" :titleName="this.title"></bannerView>

    <div class="mainBox">
      <div class="contentBox">
        <div class="contentTitle">
          <div class="markdown-body">
            <markdown />
          </div>
        </div>
      </div>
      <div class="asideBox">
        <div class="asideImg">
          <el-avatar
            src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/0d1b2cad168244918d2ee927bb664eb5.jpeg"
            :size="90"
            class="asidePic"
          ></el-avatar>
        </div>
        <div class="asideTile">宜浪漫，忌平庸</div>
      </div>
     <div v-if="btnFlag" class="go-top"  @click="backTop">
     <img src="@/assets/backTop.png" alt="" class="backTopbtn">
     </div>

    </div>
    <footerView></footerView>
  </div>
</template>

<script>
import bannerView from "@/components/bannerView/index";
import footerView from '@/components/footerView/index.vue'
// md文件地址
import markdown from "./test.md";
// 代码高亮
import "highlight.js/styles/github.css";
// 其他元素使用 github 的样式
import "github-markdown-css";
export default {
  components: { bannerView, markdown,footerView },
  mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
  data() {
    return {
      btnFlag:false,
      img: "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg16.jpg",
      title: "首页",
    };
  },
  methods:{
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop-600 > 0) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
  }
};
</script>

<style <style lang="scss">
.aboutBox {
  height: 100%;
  .mainBox {
    position: relative;
    width: 70%;
    // height: 1000px;
    // height: 100%;
    margin: 0 auto;
    margin-top: 10px;
    // background: skyblue;
    .contentBox {
      width: 71%;
      background: #fff;
      // background: pink;
      border: 1px solid #ccc;
      text-align: left;
      padding: 0 20px;
      margin-bottom: 30px;
    }
    .asideBox {
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
      width: 25%;
      height: 50vh;
      // background: orange;
      background: #fff;
      .asideImg {
        position: relative;
        width: 100%;
        height: 15vh;
        background: url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg21.jpg");
        background-size: cover;
        background-position: 0 -40px;
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
        color: rgb(51, 51, 51);
        margin-top: 50px;
        font-size: 18px;
        letter-spacing: 3px;
      }
    }
  }
  .go-top{
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url('@/assets/bg6.jpg');
    background-size: cover;
    bottom: 50px;
    right: 50px;
    .backTopbtn{
      margin: 10px auto;
    }
  }
}
</style>>
