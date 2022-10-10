<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-10-10 14:13:14
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-10-10 15:46:10
 * @FilePath: \blog3.0\src\components\musicView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="page-promotion flex-col">
    <div class="con-play flex" @click="audioPlayOrPause()">
    <!-- src替换 -->
      <img v-show="playFlag" class="audio-on" src="" alt="">
      <img v-show="!playFlag" class="audio-off" src="" alt="">
    </div>
    
    <audio ref="audio" src="https://img.youpenglai.com/penglai/1.mp3" autoplay loop preload="auto"></audio>
  </div>
</template>

<script>
  export default {
    name: 'Promotion',
    data () {
      return {
        playFlag: true,
        clickMusicBtn: false,
      }
    },
    
    async mounted () {
      this.audioAutoPlay()
      document.addEventListener("visibilitychange", (e) => { // 兼容ios微信手Q
        if (this.clickMusicBtn) { // 点击了关闭音乐按钮
          if (this.playFlag) {
            this.audioAutoPlay();
            this.playFlag = true;
          } else {
            this.audioPause();
            this.playFlag = false;
          }
      
          text.innerHTML = e.hidden;
          if (e.hidden) {  // 网页被挂起
            this.audioAutoPlay();
            this.playFlag = true;
          } else { // 网页被呼起
            this.audioPause();
            this.playFlag = false;
          }
        } else { // 未点击关闭音乐按钮
          if (this.playFlag) {
            this.audioPause();
            this.playFlag = false;
          } else {
            this.audioAutoPlay();
            this.playFlag = true;
          }
      
          text.innerHTML = e.hidden;
          if (e.hidden) {  // 网页被挂起
            this.audioPause();
            this.playFlag = false;
          } else { // 网页被呼起
            this.audioAutoPlay();
            this.playFlag = true;
          }
        }
      });
    },
    
    methods: {
      audioPlayOrPause() {
        this.clickMusicBtn = !this.clickMusicBtn;
        if (this.playFlag) {
          this.audioPause();
          this.playFlag = false;
        } else {
          this.audioAutoPlay();
          this.playFlag = true;
        }
      },
      audioPause() {
        let audio = this.$refs.audio
        audio.pause();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.pause();
        }, false);
      },
      audioAutoPlay() {
        let audio = this.$refs.audio
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.play();
        }, false);
      },
    },
  }
</script>
