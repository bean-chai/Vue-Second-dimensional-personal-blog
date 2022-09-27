<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-27 10:56:50
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 16:25:25
 * @FilePath: \blog3.0\src\views\404View.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
<div align="center" style='font-family:"微软雅黑"'>
    <img src="http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/404.png" border="0" height="" style="margin:10vh 0 0 0"/>
    <br>
    找不到这个页面啊！是不是打错啦!<br><br>
    <el-button @click="handleBack">返回引导页</el-button>
    <br><br> &copy; chaichaisocute.top
</div>
</template>

<script>
export default{
    methods:{
        handleBack() {
            this.$router.push("/")
        }
    }
}
</script>