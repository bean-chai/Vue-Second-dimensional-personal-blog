/*
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-09-26 12:32:45
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-09-26 12:33:02
 * @FilePath: \blog3.0\markdown-loader.js
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
 */
const HyperDown = require('hyperdown');

const Prism = require('prismjs');

function markdownLoader(val) {

    let parser = new HyperDown();

    let html = parser.makeHtml(val);

    html = html.replace(/(?<=

]*?>)[\s\S]*? (?=) / gi, v => {
        v = v.replace(/_&/g, ' ').replace(/"/g, '"').replace(/</g, '').replace(/&/g, '&');

        return Prism.highlight(v, Prism.languages.javascript);

    });

    return (

        `

${html}
`
    );

}

module.exports = markdownLoader;
