import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const Logo = styled.div`

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
`;