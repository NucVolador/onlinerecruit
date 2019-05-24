import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    &:before{
        content: "";
        display: inline-block;
        height: 85%;
        vertical-align: middle;
    }
`;

export const Logo = styled.div`
    position: absolute;
    top: 56px;
    margin-left: 50px;
    & img {
        width: 100px;
    }
`;

export const Main = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
`;

export const Title = styled.h4`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size:18px;
    & >div > a{
        padding: 10px;
        color: #969696;
    }
    & >div > a.active{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const LoginForm = styled.div`
    &>form{
        margin-bottom: 30px;
    }
`;

export const RegesiterForm = styled.div`
    &>form{
        margin-bottom: 30px;
    }
`;

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

export const ForgetBtn = styled.div`
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
    &>a{
        color:#999;
    }
`;

export const RemberBtn = styled.div`
    float: left;
    margin: 15px 0;
    &>span{
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
    }
`;

export const Submit = styled.input`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    &.sign-in{
        background: #3194d0;
    }
`;

export const SignUpMsg= styled.p`
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    &>a{
        color: #3194d0;
    }
`;

export const MoreSign = styled.div`

`;