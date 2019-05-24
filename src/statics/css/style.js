import { injectGlobal } from 'styled-components';

injectGlobal`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    html {
        font-size: 10px;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        line-height: 1;
        font-size:17px;
        line-height: 1.42857;
        background-color: #fff; 
    }
    a, body {
        color: #333;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a{
        text-decoration:none;
    }
    img{
        border:0;
        vertical-align: middle;
    }
    .clearfix:before,.clearfix:after{
        content:'';
        display:table;
        clear:both;
    }
    html,body{
        height:100%;
    }
    *, :after, :before {
        box-sizing: border-box;
    }
    a {
        cursor: pointer;
    }
    a {
        background-color: transparent;
    }
    form {
        margin: 0 0 20px;
    }
    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }
    input{
        border:0;
        outline:none;
    }
    button, html input[type=button], input[type=reset], input[type=submit] {
        -webkit-appearance: button;
        cursor: pointer;
    }
    input[type=checkbox], input[type=radio] {
        margin: 4px 0 0;
        line-height: normal;
    }
    input[type=checkbox], input[type=radio] {
        box-sizing: border-box;
        padding: 0;
    }
    #root{
        height:100%;
    }
`