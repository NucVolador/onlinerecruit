import React,{Fragment} from 'react';
import { Logo,LoginWrapper,Main,Title } from './style';

function Login(){
    return (
        <LoginWrapper>
            <Logo/>
            <Main>
                <Title>
                    <div>
                        <a href="javascript:;">登录</a>
                        <b>·</b>
                        <a href="javascript:;">注册</a>
                    </div>
                </Title>
            </Main>
        </LoginWrapper>
    )
}

export default Login;