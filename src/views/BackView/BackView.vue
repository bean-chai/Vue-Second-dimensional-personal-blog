<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 16:27:54
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-10-09 15:16:57
 * @FilePath: \blog3.0\src\views\BackView\BackView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="postBox">
    <div class="postLeft">
      <div class="leftName">发布文章</div>
      <div class="posttitleBox">
        <div class="tltleName">文章标题</div>
        <el-input class="titleIpt" placeholder="请输入文章标题" />
      </div>
      <div class="postarticleBox">
        <div class="postarticleName">文章内容</div>
        <el-tiptap
        @onInit="onInit"
          v-model="content"
          :extensions="extensions"
          lang="zh"
          class="postArticle"
        />
      </div>
      <!-- <div class="classificationBox">
        <div class="className">文章分类</div>
        <el-select class="classIfication"></el-select>
      </div> -->
      <div class="buttonBox">
        <el-button type="info">存为草稿</el-button>
        <el-button type="primary" class="okBox" @click="pushSbumit">发布文章</el-button>
      </div>
    </div>
    <div class="postRight"></div>
  </div>
</template>

<script>
import {
  ElementTiptap,
  // 需要的 extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  Link,
  Image,
  CodeBlock,
  Blockquote,
  TodoItem,
  TodoList,
  TextAlign,
  FontSize,
  FontType,
  Fullscreen,
  TextHighlight,
  TextColor,
  FormatClear,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  History,
  TrailingNode,
  HardBreak,
  HorizontalRule,
  LineHeight,
  Indent,
} from "element-tiptap";

export default {
  name: "postarticle",
  data() {
    // 编辑器的 extensions
    // 它们将会按照你声明的顺序被添加到菜单栏和气泡菜单中
    return {
      extensions: [
        new Doc(), // 必须项
        new Text(), // 必须项
        new Paragraph(), // 必须项
        new Heading({ level: 6 }), // 标题
        new Bold({ bubble: true }), // 加粗 bubble: true 在气泡菜单中渲染菜单按钮
        // new Underline({ bubble: true, menubar: false }), // 下划线 bubble: true, menubar: false 在气泡菜单而不在菜单栏中渲染菜单按钮
        new Italic({ bubble: true }), // 斜体
        new Strike({ bubble: true }), // 删除线
        new ListItem(), // 使用列表必须项
        new BulletList({ bubble: true }), // 无序列表
        new OrderedList({ bubble: true }), // 有序列表
        new Link(), // 链接
        new Image(), // 图片
        new CodeBlock({ bubble: true }), // 代码块
        new Blockquote(), // 引用
        new TodoItem(), // 任务列表必须项
        new TodoList(), // 任务列表
        new TextAlign({ bubble: true }), // 文本对齐方式
        new FontSize({ bubble: true }), // 字号
        new FontType({ bubble: true }), // 字体
        new Fullscreen(), // 全屏
        new TextHighlight({ bubble: true }), // 文本高亮
        new TextColor({ bubble: true }), // 文本颜色
        new FormatClear({ bubble: true }), // 清除格式
        new Table({ resizable: true }), // 表格
        new TableHeader(), // 表格必须项
        new TableCell(), // 表格必须项
        new TableRow(), // 表格必须项
        new History(), // 撤销
        new TrailingNode(), // 重做
        new HardBreak(), // 分割线
        new HorizontalRule(), // 行距
        new LineHeight(), // 增加缩进
        new Indent(), // 减少缩进
      ],
      // 编辑器的内容
      content: `
        <h1>请输入文章内容</h1>
      `,
    };
  },
   methods: {
    /*
     * tiptap editor 实例
     * 阅读 https://tiptap.scrumpy.io/docs/guide/editor.html
    */
    onInit ({ editor }) {
        console.log(editor);
    },
    pushSbumit() {
        console.log(this.content);
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>