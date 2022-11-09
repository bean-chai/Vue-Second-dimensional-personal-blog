<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-11-09 10:38:10
 * @FilePath: \blog3.0\src\views\HomeView\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="home">
    <div class="coverBox">
      <div class="centerBox">
        <!-- 头像 -->
        <el-avatar
          src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/0d1b2cad168244918d2ee927bb664eb5.jpeg"
          :size="150"
          class="picT"
        ></el-avatar>
        <!-- 作者姓名 -->
        <div class="ahtuorName">柴柴</div>
        <el-divider class="divider"></el-divider>
        <!-- 内容 -->
        <div class="title" v-for="(v, k) in content" :key="k">
          <typewriter class="str" :str="v"></typewriter>
        </div>
        <!-- 引导按钮 -->
        <div class="btnBox">
          <el-button round @click="clickHome" class="btnStyle">首页</el-button>
          <el-button round class="btnStyle">博客</el-button>
          <el-button round class="btnStyle">后台</el-button>
        </div>
        <!-- 链接图标模块 -->
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
          :popupWidth="'250px'"
        >
          <!-- 弹窗内容 -->
          <div class="go433Box">
            <span>CQUCC-4-433👉 </span
            ><a href="https://github.com/4-433" target="_blank">点击前往</a
            ><br />
            <span>Chaichai👉 </span
            ><a href="https://github.com/bbxx123" target="_blank">点击前往</a><br />
            <img src="@/assets/fenhuli.gif" alt="" class="go433Img" />
          </div>
        </Popup>
      </div>
      <!-- 页脚 -->
      <div class="footerBox">
        &copy; 2022 Chaichai 版权所有<br />
        <a href="https://beian.miit.gov.cn/" style="color: #fff" target="_blank">滇ICP备2022000365号</a>
      </div>
    </div>
  </div>
</template>


<script>
import Popup from "@/components/dialogView/index.vue"; //弹窗组件
import typewriter from "./components/typewriter.vue";
import "./css/HomeView.scss";

export default {
  name: "HomeView",
  components: { Popup, typewriter },
  data() {
    return {
      content: [],
      str: "我是文字",
      //文章内容
      words: [
        "嗨 欢迎来到chaichai.top",
        "励志成为优秀且花里胡哨的程序员，并在努力奋斗	",
        "CQUCC-4-433正在找寻志同道合的小伙伴，欢迎前端、后端、UI加入我们！",
      ],
      dialogVisible: false, // 弹框的出现与否
      dialogTitle: "GitHub", //弹窗标题
    };
  },
  mounted() {
    this.setTime();
  },
  methods: {
    setTime() {
      var arr = this.words;
      var that = this;
      arr.forEach(function (v, k) {
        setTimeout(function () {
          that.content.push(v);
        }, k * 2500);
      });
    },
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
      //qq弹窗内容
      this.$alert("柴柴：2787922490(はじかの)", "QQ", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>