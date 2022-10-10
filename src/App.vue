<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-10-10 17:12:10
 * @FilePath: \blog3.0\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div id="app">
    <!-- <HomeView v-if="home"></HomeView>
    <AboutView v-if="about"></AboutView> -->

    <transition class="auto-scroll" appear name="animate__animated animate__bounce"
      enter-active-class="animate__backInUp animate__slow" leave-active-class="animate__fadeOutDownBig contron">
      <!-- 解决抖动 -->
      <router-view style="-webkit-backface-visibility: hidden"></router-view>
    </transition>
    <!-- 用户点击页面内任意地方开始自动播放 -->
    <!-- commponents里面放了一个可以在pc，手机端，微信打开以后自动播放的音乐组件，有需要的可以康康 -->
    <!-- 这里随便放了一首歌，需要的同学可以使用 vue-video-player 等插件~ -->
    <audio src="http://music.163.com/song/media/outer/url?id=1500151640.mp3" loop autoplay ref="au"></audio>
  </div>
</template>

<script>
import HomeView from "@/views/HomeView/HomeView.vue";
import AboutView from "@/views/FirstView/FirstView.vue";
export default {
  components: { HomeView, AboutView },
  mounted() {
    document.addEventListener('click', (e) => {
      if (e.isTrusted) {
        this.$refs.au.play()
      }
    })
  },

  data() {
    return {
      home: true,
      about: false,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  user-select: none;
  text-decoration: none;
  list-style: none;
}

//解决抖动
.contron {
  display: none;
}

#app {
  // height: 100%;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  background: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style lang="scss">
::-webkit-scrollbar {
  /* 滚动条整体样式 */
  width: 5px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}

::-webkit-scrollbar-thumb {
  /* 滚动条里面小方块 */
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: #cccfd9;
}

::-webkit-scrollbar-track {
  /* 滚动条里面轨道 */
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
}

.auto-scroll {
  overflow: overlay;
}

/* 需要滚动的地方加上这个class */
.auto-scroll ::-webkit-scrollbar {
  /* 组件内滚动条不显示 */
  display: none;
}

.auto-scroll:hover ::-webkit-scrollbar {
  /* 悬停时滚动条才显示 */
  display: block;
}
</style>

<style>
/* 动画效果延迟秒数设置 */
:root {
  /* 延迟X秒后执行 */
  /* --animate-delay: -2s; */
  /* 执行X秒 */
  /* --animate-duration: 0.2s; */
  --animate-duration: 0.5s !important;
  --animate-delay: 0.5s !important;
  --animate-repeat: 0.5s !important;
}
</style>
