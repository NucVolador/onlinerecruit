import React,{Fragment,useState} from 'react';
import Input from "./components/InputItem";
import { 
    Logo,
    LoginWrapper,
    Main,
    Title,
    LoginForm,
    RegesiterForm,
    MoreSign,
    InputItem,
    Submit,
    ForgetBtn,
    RemberBtn,
    SignUpMsg
} from './style';

function Login(){
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRegister] = useState("")
    // const [registerInfo, setRegister] = useState({
    //     username
    // })
    function toggleLoginRegesiter(){
        setLogin(!login);
    }
    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    return (
        <LoginWrapper>
            <Logo>
                <a href="/">
                    <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                </a>
            </Logo>
            <Main>
                <Title>
                    <div>
                        <a href="javascript:;" onClick={toggleLoginRegesiter} className={login?'active':''}>登录</a>
                        <b>·</b>
                        <a href="javascript:;" onClick={toggleLoginRegesiter} className={!login?'active':''}>注册</a>
                    </div>
                </Title>
                <LoginForm style={{"display":login?"block":"none"}}>
                    <form action="#">
                        <Input
                            classList='restyle'
                            type="text"
                            name="username"
                            value={username}
                            placeholder="请输入用户名"
                            onChange={handleUsernameChange}
                            msg="请输入用户名"
                        />
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="请输入密码"
                            onChange={handlePasswordChange}
                            msg="请输入密码"
                        />
                        {/*<InputItem className={'restyle'}>*/}
                        {/*    <input type="text" name="username" placeholder="请输入用户名"/>*/}
                        {/*    <i className={'iconfont ic-user'}></i>*/}
                        {/*</InputItem>*/}
                        {/*<InputItem>*/}
                        {/*    <input type="text" name="password" placeholder="请输入密码"/>*/}
                        {/*</InputItem>*/}
                        {/*<RemberBtn>*/}
                        {/*    <input type="checkbox" name="remember" checked/>*/}
                        {/*    <span>记住我</span>*/}
                        {/*</RemberBtn>*/}
                        <ForgetBtn>
                            <a href="javascript:;">登录遇到问题?</a>
                        </ForgetBtn>
                        <Submit type="submit" className={'sign-in'} value="登录"/>
                    </form>
                </LoginForm>
                <RegesiterForm style={{"display":!login?"block":"none"}}>
                    <form action="#">
                        <Input
                            classList='restyle'
                            type="text"
                            name="username"
                            value={username}
                            placeholder="请输入用户名"
                            onChange={handleUsernameChange}
                            msg="用户名不能为空"
                        />
                        <Input
                            classList='restyle no-radius'
                            type="password"
                            name="password"
                            value={password}
                            placeholder="请输入密码"
                            onChange={handlePasswordChange}
                            msg="密码不能为空"
                        />
                        <Input
                            type="password"
                            name="repassword"
                            value={repassword}
                            placeholder="请再次输入密码"
                            onChange={handlePasswordChange}
                            msg="两次密码不一致"
                        />

                        <Submit type="submit" value="注册"/>
                        <SignUpMsg>
                            点击 “注册” 即表示您同意并愿意遵守智招
                            <br/>
                            <a href="javascript:;">用户协议</a>
                            和
                            <a href="javascript:;">隐私政策</a>
                        </SignUpMsg>
                    </form>
                </RegesiterForm>
                <MoreSign></MoreSign>
            </Main>
        </LoginWrapper>
    )
}

export default Login;