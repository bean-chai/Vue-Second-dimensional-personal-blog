<template>
  <div class="blogBox">
    <div class="contentBox">
      <div class="contentTile"></div>
    </div>
    <div class="titleBox">
      <div class="titleName">React专区</div>

      <div class="bannerBox">
        <slider ref="slider" :options="options" @slide="slider">
          <slideritem
            v-for="(item, index) in someList"
            :key="index"
            :style="item.style"
            >{{ item.html }}<br />
            {{ item.athuer }}<br />
            {{ item.creatTime }}</slideritem
          >
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";

export default {
  components: { slider, slideritem },
  data() {
    return {
      someList: [
        {
          html: "React入门到入土",
          athuer: "chaichai",
          creatTime: "2021-10-19",
          style: {
            background:
              'url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg5.jpg")',
            backgroundSize: "cover",
          },
        },
        {
          html: "React框架详解",
          athuer: "chaichai",
          creatTime: "2021-10-19",

          style: {
            background:
              'url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg6.jpg")',
            backgroundSize: "cover",
          },
        },
        {
          html: "React使用echarts",
          athuer: "chaichai",
          creatTime: "2021-10-19",

          style: {
            background:
              'url("http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg7.jpg")',
            backgroundSize: "cover",
          },
        },
      ],
      options: {
        currentPage: 0,
        direction: "vertical",
        slidesToScroll: 1, //每次滑动项数
        effect: "fade",
        thresholdDistance: 10,
        loop: true,
      },
    };
  },
  methods: {
      slider(data) {
        console.log(data,'silder2');
      },
  },
};
</script>

<style lang='scss'>
.blogBox {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 800px;
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
  margin-bottom: 20px;
  // background: pink;
  .titleBox {
    width: 35%;
    height: 100%;
    text-align: center;
    .titleName {
      margin: 0 auto;
      width: 80%;
      font-size: 24px;
      height: 50px;
      line-height: 50px;
      font-weight: 550;
      // background: yellow;
    }

    .bannerBox {
      width: 100%;
      height: 750px;
      .slider-item {
        color: rgb(255, 255, 255);
        font-weight: 550;
        line-height: 100px;
        text-shadow: 2px 2px 2px #000;
        font-size: 30px;
      }
    }
  }
  .contentBox {
    width: 65%;
    height: 100%;
    background: skyblue;
  }
}
</style>