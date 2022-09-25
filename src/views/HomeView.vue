<template>
  <div class="home">
    <div class="coverBox">
      <div class="centerBox">
        <el-avatar
          src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/0d1b2cad168244918d2ee927bb664eb5.jpeg"
          :size="150"
        ></el-avatar>
        <div class="ahtuorName">柴柴</div>
        <el-divider style="width: 300px !important"></el-divider>
        <div class="title1">嗨 欢迎来到chaichai.top</div>
        <div class="title2">励志成为优秀且花里胡哨的程序员，并在努力奋斗</div>
        <div class="btnBox">
          <el-button round @click="clickHome" class="btnStyle">首页</el-button>
          <el-button round class="btnStyle">博客</el-button>
          <el-button round class="btnStyle">后台</el-button>
        </div>
        <div class="continueBox">
          <a href=""><img src="@/assets/QQ.png" alt="" class="logoimg" /></a>
          <a href=""
            ><img src="@/assets/github.png" alt="" class="logoimg"
          /></a>
        </div>
        <div class="textBox">百梦蠢狗(bushi</div>
      </div>
      <div class="footerBox">
        &copy;2022 Chaichai<br />
        滇ICP备2022000365号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    clickHome() {
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: url("@/assets/bg3.jpg");
  background-position: 0 0;
  background-repeat: repeat-x;
  animation: animatedBackground 80s linear infinite;
  @keyframes animatedBackground {
    0% {
      background-position: 0% 49%;
    }
    50% {
      background-position: 100% 49%;
    }
    100% {
      background-position: 0% 49%;
    }
  }
  .ahtuorName {
    font-size: 30px;
    margin-top: 15px;
    letter-spacing: 10px;
    font-weight: 550;
  }
  .coverBox {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .centerBox {
    z-index: 99999;
    position: absolute;
    width: 800px;
    height: 600px;
    border-radius: 30px;
    // border: 1px solid #fff;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title1 {
      font-size: 30px;
      letter-spacing: 3px;
      //英文样式
      text-transform: uppercase;
      font-weight: 900;
    }
    .title2 {
      margin-top: 8px;
      font-size: 23px;
      letter-spacing: 3px;
      font-weight: 550;
    }
    .btnBox {
      width: 350px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .btnStyle {
        font-size: 18px;
        font-weight: 550;
        background: rgb(255, 255, 255, 0.3);
        color: #fff;
        letter-spacing: 3px;
      }
    }
    .textBox {
      font-size: 18px;
      font-weight: 550;
      letter-spacing: 2px;
      color: rgb(220, 220, 220);
      margin-top: 20px;
    }
  }
  .footerBox {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .continueBox {
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .logoimg {
      color: rgb(0, 0, 0);
      font-size: 20px;
      width: 40px;
    }
  }
}
</style>


<style lang="scss">
// 动画特效
</style>