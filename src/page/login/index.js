import React,{Fragment,useState} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
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



import { Form, Icon, Input, Button, Checkbox, message, Select } from 'antd';

const { Option } = Select;


class NormalLoginForm extends React.Component {
	state = {
		login: true,
		msg:"",
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if(this.state.login){
					this.props.login(values.username,values.password)
						.then((msg)=>{
							message.info(msg);
						})
				}else{
					this.props.register(values.username,values.password,values.type)
						.then((msg)=>{
							message.info(msg);
						})
					
				}
				
			}
		});
	};
	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次密码不一致');
		} else {
			callback();
		}
	};
	toggleLoginRegesiter =  loginstate =>{
		let {login} = this.state;
		this.setState({login:loginstate});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const {login} = this.state;
		const {is_login,msg} = this.props;
		
		if(is_login){
			return (<Redirect to='/'/>)
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
							<a href="javascript:;" onClick={()=>this.toggleLoginRegesiter(true)} className={login?'active':''}>登录</a>
							<b>·</b>
							<a href="javascript:;" onClick={()=>this.toggleLoginRegesiter(false)} className={!login?'active':''}>注册</a>
						</div>
					</Title>
					{
						login?
							<Form onSubmit={this.handleSubmit} className="login-form">
								<Form.Item className="tl">
									{getFieldDecorator('username', {
										rules: [{ required: true, message: '用户名不能为空！' }],
									})(
										<Input
											prefix={<Icon type="user" style={{ color: 'rgb(150,150,150)' }} />}
											placeholder="请输入昵称"
										/>,
									)}
								</Form.Item>
								<Form.Item className="tl">
									{getFieldDecorator('password', {
										rules: [{ required: true, message: '密码不能为空！' }],
									})(
										<Input.Password
											prefix={<Icon type="lock" style={{ color: 'rgb(150,150,150)' }} />}
											type="password"
											placeholder="请输入密码"
										/>,
									)}
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: true,
									})(<Checkbox className="login-form-remember">记住我</Checkbox>)}
									<a className="login-form-forgot" href="">
										登录遇到问题？
									</a>
									<Button type="primary" htmlType="submit" className="login-form-button">
										登录
									</Button>
								</Form.Item>
							</Form>
							:
							<Form onSubmit={this.handleSubmit} className="login-form">
								<Form.Item className="tl">
									{getFieldDecorator('username', {
										rules: [{ required: true, message: '用户名不能为空！' }],
									})(
										<Input
											prefix={<Icon type="user" style={{ color: 'rgb(150,150,150)' }} />}
											placeholder="请输入昵称"
										/>,
									)}
								</Form.Item>
								<Form.Item className="tl">
									{getFieldDecorator('password', {
										rules: [{ required: true, message: '密码不能为空！' }],
									})(
										<Input.Password
											prefix={<Icon type="lock" style={{ color: 'rgb(150,150,150)' }} />}
											type="password"
											placeholder="请输入密码"
										/>,
									)}
								</Form.Item>
								<Form.Item className="tl">
									{getFieldDecorator('confirm', {
										rules: [
											{
												required: true,
												message: '请再次输入密码',
											},
											{
												validator: this.compareToFirstPassword,
											},
										],
									})(
										<Input.Password
											prefix={<Icon type="safety" style={{ color: 'rgb(150,150,150)' }}/>}
											placeholder="请再次输入密码"
										/>
									)}
								</Form.Item>
								<Form.Item className="tl">
									{getFieldDecorator('type', {
										rules: [{ required: true, message: '角色不能为空' }],
									})(
										<Select placeholder="请选择用户类型">
											<Option value="0">求职者</Option>
											<Option value="1">企业招聘</Option>
										</Select>,
									)}
								</Form.Item>
								<Form.Item>
									<Button className="register-form-button" type="primary" htmlType="submit">
										注册
									</Button>
									<SignUpMsg>
										点击 “注册” 即表示您同意并愿意遵守智招
										<br/>
										<a href="javascript:;">用户协议</a>
										和
										<a href="javascript:;">隐私政策</a>
									</SignUpMsg>
								</Form.Item>
							</Form>
					}
					<MoreSign></MoreSign>
				</Main>
			</LoginWrapper>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapState = (state) => ({
	is_login: state.getIn(['Login','is_login']),
	msg: state.getIn(['Login','msg'])
})

const mapDispatch = (dispatch) => ({
	login(username, password){
		return dispatch(ActionCreator.login(username, password))
	},
	register(username, password,type){
		return dispatch(ActionCreator.register(username, password,type))
	}
})

export default connect(mapState, mapDispatch)(WrappedNormalLoginForm);