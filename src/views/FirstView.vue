<template>
  <div class="aboutBox">
    <!-- banner Start -->
    <div class="bannerBox">
      <div class="coverBox">
        <div class="navBox">
          <div class="topTitle">chaichai.top</div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rbg(255,255,255,0)"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">博客</el-menu-item>
            <el-menu-item index="3">友链</el-menu-item>
          </el-menu>
        </div>

        <div class="centerTile">首页</div>
        <!-- <i class="el-icon-arrow-down icon"></i> -->
        <div class="icon">﹀</div>
      </div>
      <!-- <div class="el-icon-arrow-down icon"></div> -->
    </div>

    <!-- banner End -->
    <!-- <div class="asideBox">test</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style <style lang="scss">
.aboutBox {
  width: 100vw;
  height: 100vh;
  .bannerBox {
    width: 100%;
    height: 100%;
    background: url("@/assets/bg16.jpg");
    background-size: cover;
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
}
</style>>
