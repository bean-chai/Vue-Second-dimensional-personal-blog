<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 16:39:59
 * @FilePath: \blog3.0\src\views\HomeView\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
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
          <img src="@/assets/QQ.png" alt="" class="logoimg" @click="goQQ" />
          <img
            src="@/assets/github.png"
            alt=""
            class="logoimg"
            @click="dialogVisible = true"
          />
        </div>
        <!-- 弹窗组件 -->
        <Popup
          :dialogTitle="dialogTitle"
          :visible.sync="dialogVisible"
          @updateVisible="updateVisible"
          @resetPopupData="resetPopupData"
          @submitPopupData="submitPopupData"
          @handleClose="handleClose"
          :popupWidth="'550px'"
        >
          <div style="font-size: 16px;text-align: center;">
            <span>CQUCC-4-433👉</span
            ><a href="https://github.com/4-433" target="_blank">点击前往</a
            ><br />
            <span>Chaichai👉</span
            ><a href="https://github.com/bbxx123" target="_blank">点击前往</a>
            <img src="@/assets/fenhuli.gif" alt="" style="display:block;margin:0 auto;margin-top:30px"/>
          </div>
        </Popup>
        <div class="textBox">
          CQUCC-4-433正在找寻志同道合的小伙伴，欢迎前端、后端、UI加入我们！
        </div>
      </div>
      <!-- 页脚 -->
      <div class="footerBox">
        &copy; 2022 Chaichai 版权所有<br />
        滇ICP备2022000365号
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/dialogView/index.vue";
export default {
  name: "HomeView",
  components: { Popup },
  data() {
    return {
      dialogVisible: false, // 弹框的出现与否
      dialogTitle: "GitHub",
    };
  },
  methods: {
    updateVisible(val) {
      this.dialogVisible = val;
    },
    // 点击取消的事件
    resetPopupData() {
      //  这里可重置数据
      this.dialogVisible = false;
    },
    // 点击确定的按钮
    async submitPopupData() {
      this.dialogVisible = false;
    },
    // 关闭弹框（头部的X）
    handleClose() {
      this.dialogVisible = false;
    },
    clickHome() {
      this.$router.push("/about");
    },
    goQQ() {
      this.$alert("柴柴：2787922490(はじかの)", "QQ", {
        confirmButtonText: "确定",
      });
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
    background: rgba(255, 255, 255, 0);
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
      cursor: pointer;
      color: rgb(0, 0, 0);
      font-size: 20px;
      width: 40px;
    }
  }
}
</style>