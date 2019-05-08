import { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1532520752126'); /* IE9*/
      src: url('./iconfont.eot?t=1532520752126#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('./iconfont.ttf?t=1532520752126') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1532520752126#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
.icon-spin:before { content: "\\e851"; }

.icon-Aa:before { content: "\\e636"; }

.icon-magnifier:before { content: "\\e64d"; }

.icon-icon-checkin:before { content: "\\e615"; }
`
