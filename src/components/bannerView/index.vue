<template>
  <div>
    <div
      class="bannerBox"
      :style="{ background: 'url(' + imgUrl + ')', backgroundSize: 'cover' }"
    >
      <div class="coverBox">
        <div class="navBox">
          <div class="topTitle">chaichai.top</div>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            collapse-transition
            background-color="rbg(255,255,255,0)"
            router
            active-text-color="#fff"
            text-color="#fff"
          >
            <el-menu-item index="about">首页</el-menu-item>
            <el-menu-item index="blog">博客</el-menu-item>
            <el-menu-item index="friend">友链</el-menu-item>
          </el-menu>
        </div>
        <div class="centerTile">{{ titleName }}</div>
        <div class="icon">﹀</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true,
    },
    titleName: {
      required: true,
    },
  },
  data() {
    return {
      activeIndex: "1",
      //   url: imgUrl
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    // console.log(imgUrl);
    // console.log(this.url);
  },
};
</script>

<style lang="scss">
.bannerBox {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  // background: url("");
  // background-position: 0 -200px;
  overflow: hidden;
}

.coverBox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  .navBox {
    height: 60px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 10px 10px 0 10px;

    .topTitle {
      width: 300px;
      text-align: left;
      // padding-left: 30px;
      // padding-top: 30px;
      color: #fff;
      font-size: 38px;
      font-weight: 900;
      //   letter-spacing: 1px;
      text-transform: uppercase;
    }

    .el-menu {
      // width: 500px;
      height: 60px;
      background: rgb(0, 0, 0, 0);
      border: 0px;
    }

    .el-menu-item {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      background-color: rgb(0, 0, 0, 0) !important;
    }
  }

  .centerTile {
    width: 100%;
    line-height: 70vh;
    color: #fff;
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 8px;
    //   text-transform: uppercase;
  }

  .icon {
    margin-top: 30px;
    z-index: 99999;
    //   width: 500px;
    font-weight: 900;
    font-size: 35px;
    color: #fff;
  }
}
</style>