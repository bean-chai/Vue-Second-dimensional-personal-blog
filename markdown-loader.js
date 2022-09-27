/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 12:32:45
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 16:25:52
 * @FilePath: \blog3.0\markdown-loader.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
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
