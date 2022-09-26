/*
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-09-26 15:49:47
 * @FilePath: \blog3.0\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import animated from 'animate.css'
Vue.use(animated)
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
