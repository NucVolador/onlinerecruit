import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height : 57px;
    border-bottom:1px solid #f0f0f0;
    background-color: #fff;
`;

export const HeaderContent = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin:0 auto;
    height:100%;
    position:relative;
`

export const Logo = styled.a`
    position:absolute;
    width:130px;
    height:56px;
    & > img {
        width:100%;
    }
`;
export const Register = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
    line-height:56px;
    a{
        display:inline-block;
        // height:30px;
        line-height:30px;
        border:1px solid #ec6149;
        border-radius:35px/40px;
        margin-right:15px;
        padding: 2px 23px;
    }
    a.toudi{
        color:#ec6149;
        margin-right:35px;
    }
    .logout{
    	color:#ccc
    }
    .logout:hover{
    	background-color:#ec6149;
    	border-color:#ec6149
    }
    a:first-child{
    	color:#fff;
        background:#ec6149;
    }
    
`;
export const ContentMain = styled.div`
    width: 960px;
    height: 100%;
    margin:0 auto;
    padding : 0 15px;
    & > div > a{
        height:56px;
        line-height:56px;     
        padding:0 15px;
        font-size:15px;
        color: #969696;
    }
    & > div.left {
        float:left;
    }
    & > div.right{
        float:right;
        a i:only-child{
            font-size:20px !important;
        }
    }
`;

export const SearchInput = styled.div`
    float:left;
    position:relative;
    width:160px;
    transition:all .5s;
    height:56px;
    input{
        width:160px;
        background:#eee;
        height: 38px;
        line-height:56px;
        box-sizing:border-box;
        padding:0 35px 0 20px;
        margin-left:20px;
        border:0;
        outline: none;
        border-radius : 20px;
        margin-top: 9px;
        transition:width .5s;
    }
    &.focused,> input.focused{
        width:240px;
    }
    
    .fade-enter{
        width:160px;
    }
    &.fade-enter-active{
        width:240px;
    }
    &.fade-enter-done{
        width:240px;
    }
    &.fade-exit{
        width:240px;
    }
    &.fade-exit-active{
        width:160px;
    }
    &.fade-exit-done{
        width:160px;
    }
    
    > i{
        position: absolute;
        right: -16px;
        top: 13px;
        font-size: 23px;
        background: #eee;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    > i.focused{
        background:#999;
    }
`

export const SearchInfo = styled.div`
    width: 280px;
    box-sizing:border-box;
    padding: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
    position: absolute;
    top: 56px;
    left: 1px;
    font-size:12px;
    visibility:hidden;
    
    &.show{
        visibility:visible;
    }
`

export const SearchTitle = styled.div`
    height : 30px;
    line-height:30px;
    color:#888;
    font-size:14px;
    a{
        float:right;
        font-size:12px;
        cursor:pointer;
    }
    a > i.iconfont{
        margin-right:5px;
        display:inline-block;
        transition : transform .2s;
    }
`

export const SearchList = styled.div`
    margin-top:20px;
`

export const SearchItem = styled.a`
    display:inline-block;
    line-height:20px;
    padding: 0 5px;
    text-align:center;
    color:#666;
    border:1px solid #ccc;
    margin:0 10px 20px 0;
`