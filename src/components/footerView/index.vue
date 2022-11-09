<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 15:50:49
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-11-09 10:40:24
 * @FilePath: \blog3.0\src\components\footerView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div>
    <div class="footerBox">
      &copy; 2022 Chaichai 版权所有<br />

      <!-- 不蒜子年久失修，此功能已经无法正常运行（数据不显示或数据错误），目前暂无解决办法，需要此功能的同学自行编写后端~ 访问首页=>次数++ 即可 -->
      <!-- 浏览量：<span id="busuanzi_value_site_pv">114514</span>👀 | 访客数：<span -->
      <!-- id="busuanzi_value_site_uv" -->
      <!-- >233333</span -->
      <!-- >👦<br /> -->
      网站苟活 {{ day }}天 {{ h }}小时 {{ min }}分钟 {{ sec }}秒<br />
      power by 🧡Chaichai🧡<br />
      开源协议 MIT License <br />
      <a href="https://beian.miit.gov.cn/" style="color: #fff" target="_blank">滇ICP备2022000365号</a>
    </div>
  </div>
</template>



<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
export default {
  name: "footerView",
  mounted() {
    this.getNowFormatDate();
    let myTimeDisplay = setInterval(() => {
      this.getNowFormatDate(); //每秒更新一次时间
    }, 1000);
  },
  data() {
    return {
      day: "",
      h: "",
      min: "",
      sec: "",
    };
  },
  methods: {
    getNowFormatDate() {
      var t1 = new Date("2021/8/25 4:30:59");
      var data = new Date(); //获取当前时间
      var times = t1.getTime() - data.getTime(); //时间差的毫秒数
      var days = parseInt(times / (24 * 1000 * 3600)); //计算相差的天数
      var leave = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var h = parseInt(leave / (3600 * 1000)); //计算小时数
      //计算分钟数
      var h_leave = leave % (3600 * 1000);
      var min = parseInt(h_leave / (60 * 1000));
      //计算秒数
      var min_leave = h_leave % (60 * 1000);
      var sec = parseInt(min_leave / 1000);
      this.day = days;
      this.h = h;
      this.min = min;
      this.sec = sec;
    },
  },
};
</script>

<style>
.footerBox {
  position: relative;
  width: 100%;
  /* height: 100px; */
  padding-top: 7px;
  background: #000;
  bottom: 0;
  color: #fff;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>