import styled from 'styled-components';

export const InputItem = styled.div`
    position: relative;
    width: 100%;
    &.restyle{
        margin-bottom: 0;
    }
    &>input{
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
    }
    &>input::-webkit-input-placeholder{
        color:#969696;
    }
    &.restyle > input{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
    &.no-radius > input{
        border-radius: 0;
    }
    &>i{
        position: absolute;
        top: 14px;
        left: 10px;
        font-size: 18px;
        color: #969696;
    }
`;

export const ErrorMsg = styled.div`
    &.none{
        display:none;
    }
    &.tooltip{
        position: absolute;
        z-index: 1070;
        display: block;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-break: auto;
        line-height: 1.42857;
        text-align: left;
        text-align: start;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        white-space: normal;
        word-break: normal;
        word-spacing: normal;
        word-wrap: normal;
        font-size: 12px;
        opacity: 0;
        filter: alpha(opacity=0);
        left:300px;
        top:8px;
    }
    &.fade{
        opacity: 0;
        transition: opacity .15s linear;
    }
    &.tooltip.in {
        opacity: .9;
        filter: alpha(opacity=90);
    }
    &.tooltip.right {
        margin-left: 3px;
        padding: 0 5px;
    }
    &.tooltip.tooltip-error {
        font-size: 14px;
        line-height: 25px;
        white-space: nowrap;
        background: none;
    }
    & > div.tooltip-arrow{
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    & > div.tooltip-arrow-border{
        border-right-color: #ea6f5a;
        top: 50%;
        left: 0;
        margin-top: -5px;
        border-width: 5px 5px 5px 0;
    }
    & > div.tooltip-arrow-bg{
        left: 2px;
        border-right-color: #fff;
    }
    & > div.tooltip-inner{
        max-width: 200px;
        padding: 3px 8px;
        color: #fff;
        text-align: center;
        background-color: #000;
        border-radius: 4px;
        padding: 5px 10px;
    }
    &.tooltip-error > .tooltip-inner{
        max-width: 280px;
        color: #333;
        border: 1px solid #ea6f5a;
        background-color: #fff;
        &>i{
            position: static;
            margin-right: 5px;
            font-size: 20px;
            color: #ea6f5a;
            vertical-align: middle;
        }
        &>span{
            vertical-align: middle;
            display: inline-block;
            // white-space: normal;
            max-width: 230px;
        }
    }
`;