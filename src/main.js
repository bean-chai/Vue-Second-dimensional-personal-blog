/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-10-10 15:36:56
 * @FilePath: \blog3.0\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'
import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-tiptap/lib/index.css';
import animated from 'animate.css'

// Vue.use(animated)
Vue.use(ElementUI);

Vue.use(ElementTiptapPlugin, {
  /* 插件配置项 */
  lang: 'zh',
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
