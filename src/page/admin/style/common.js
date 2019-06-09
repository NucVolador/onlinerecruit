import styled from 'styled-components';

export const WrapperContainer = styled.div`

/** 常用色值 **/
@colorA: #f9c700;
@colorB: #ff5400;
@colorC: #333;
@colorD: #6699cc;
@colorE: #9cb3c5;
@colorF: #e0e6ec;
@colorG: #666;
@colorH: #999;
@colorI: #ccc;
@colorJ: #d7d7d7;
@colorK: #e3e3e3;
@colorL: #f1f3f5;
@colorM: #ffffff;
@colorN: #e5e5e5;
@colorO: #afafaf;
@colorP: #ff8605;
@colorQ: #f9fbfc;
@colorR: #001529;
@colorS: #002140;
@colorT: #232526;
@colorU: #bebebe;

/** 常用字体大小 **/
@fontA: 34px;
@fontB: 22px;
@fontC: 18px;
@fontD: 16px;
@fontE: 14px;
@fontF: 12px;
@fontG: 20px;

/** load **/
.ajax-loading{
    display: none;
    .loading{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding:0 40px;
      height: 80px;
      line-height: 80px;
      background: rgba(0, 0, 0, 0.75);
      border-radius: 6px;
      text-align: center;
      z-index: 9999;
      font-size:@fontD;
      color:#fff;
      img{
        width: 32px;
        vertical-align: middle;
      }
      span{
        margin-left:12px;
      }
    }
    .overlay{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 9998;
      background: rgb(255, 255, 255);
      opacity: 0.1;
    }
  }
  
  /****/

ul,li{
    list-style: none;
}
.clearfix{
    &::after{
        content:' ';
        clear:both;
        display: block;
        visibility: hidden;
    }
}
.container{
    .nav-left{
        background-color:#001529;
        color: #ffffff;
        height: calc(100vh);
    }
    .main{
        height: calc(100vh);
        background-color: #f1f3f5;
        overflow: auto;
    }
    .content{
        position: relative;
        padding: 20px;
    }
}

.content-wrap{
    background: #ffffff;
    border: 1px solid #e8e8e8;
    margin-top: -3px;
    .ant-table-wrapper{
        margin-left: -1px;
        margin-right: -2px;
    }
}
.operate-wrap{
    button{
        margin-right: 10px;
    }
}
.custom-filter-dropdown {
    padding: 8px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
}

.custom-filter-dropdown input {
    width: 130px;
    margin-right: 8px;
    display:block;
}

.custom-filter-dropdown button {
    display:inline
}

.highlight {
    color: #f50;
}
`
