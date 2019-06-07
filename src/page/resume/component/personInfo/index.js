import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox , Row, Col, Select,DatePicker} from 'antd';
import Avatar from './component/avatar'

const { Option } = Select;
const { TextArea } = Input;

class ResumeTemplate extends Component{
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// this.props.login(values.username,values.password)
				
				// console.log(Object.keys(values),values.age.format("YYYY-MM-DD"),values,typeof values.age)
				// console.log(values.age.format("YYYY-MM-DD"),values,typeof Moment,values.age instanceof String,"1111	a")
				// values.age = values.age.format("YYYY-MM-DD");
				this.props.submitHandle();
			}
		});
	};
	normFile = e => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};
    render(){
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
			labelAlign:'left',
			colon: true
		};
		const avatarLayout={
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16,offset:6 },
			},
			labelCol: {
				xs: { span: 24 },
				sm: { span: 12,offset:6 },
			},
			label:"上传头像",
			labelAlign: 'left',
			extra: "推荐1寸照片尺寸，100x100像素。支持jpg格式，大小不超过2M",
			colon: true
		}
		// const prefixSelector = getFieldDecorator('prefix', {
		// 	initialValue: '86',
		// })(
		// 	<Select style={{ width: 70 }}>
		// 		<Option value="86">+86</Option>
		// 		<Option value="87">+87</Option>
		// 	</Select>,
		// );
		const ageConfig = {
			rules: [
				// { type: 'object', required: true, message: '年龄不能为空!' }
			],
		};
		
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row gutter={16}>
					<Col span={16} style={{paddingTop:'8px'}}>
						<Row>
							<Col span={24}>
								<Form.Item
									{...formItemLayout}
									label="姓名"
								>
									{getFieldDecorator('username', {
										rules: [{ required: true, message: '姓名不能为空！' }],
									})(
										<Input
											prefix={<Icon type="user" style={{ color: 'rgb(150,150,150)' }} />}
										/>
									)}
								</Form.Item>
								<Form.Item
									label="性别"
									{...formItemLayout}
								>
									{getFieldDecorator('sex', {
										rules: [{ required: true, message: '性别不能为空' }],
									})(
										<Select placeholder="请选择">
											<Option value="0">男</Option>
											<Option value="1">女</Option>
										</Select>,
									)}
								</Form.Item>
								<Form.Item
									{...formItemLayout}
									label="邮箱"
								>
									{getFieldDecorator('email', {
										rules: [
											{ required: true, message: '邮箱不能为空！' },
											{
												type: 'email',
												message: '请输入合法邮箱',
											}
										],
									})(<Input
										prefix={<Icon type="mail" style={{ color: 'rgb(150,150,150)' }} />}
									/>)}
								</Form.Item>
								<Form.Item
									{...formItemLayout}
									label="手机号"
								>
									{getFieldDecorator('phoneNum', {
										rules: [{ required: true, message: '手机号不能为空！' }],
									})(
										<Input  style={{ width: '100%' }} />
									)}
								</Form.Item>
								<Form.Item
									label="出生日期"
									{...formItemLayout}
								>
									{getFieldDecorator('age', ageConfig)(<DatePicker />)}
								</Form.Item>
								<Form.Item
									label="最高学历"
									{...formItemLayout}
								>
									{getFieldDecorator('educationMax', {
										rules: [{ required: true, message: '学历不能为空' }],
									})(
										<Select placeholder="请选择">
											<Option value="0">专科</Option>
											<Option value="1">本科</Option>
											<Option value="2">双学位</Option>
											<Option value="3">硕士</Option>
											<Option value="4">博士</Option>
										</Select>,
									)}
								</Form.Item>
								<Form.Item
									label="自我描述"
									{...formItemLayout}
								>
									{getFieldDecorator('introduce', {
										rules: [{ max: 100, message: '字数最多为100字' }],
									})(
										<TextArea rows={4} />
									)}
								</Form.Item>
							</Col>
						</Row>
					</Col>
					<Col span={8}>
						<Form.Item
							{...avatarLayout}
						>
							{getFieldDecorator('avatar', {
								// valuePropName: 'fileList',
								// getValueFromEvent: this.normFile,
							})(
								<Avatar imageSrc={this.props.imageSrc}  userId={this.props.userId}/>
							)}
						</Form.Item>
						<Form.Item
							wrapperCol={{
								xs: { span: 24 },
								sm: { span: 16,offset:6 },
							}}
						>
							<Button type="primary" htmlType="submit" className="login-form-button">
								保存
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
        );
    }
}

const WrappedResumeTemplate = Form.create({
	name: 'person',
	onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields(props) {
		return {
			username: Form.createFormField({
				...props.username,
				value: props.username.value,
			}),
			sex: Form.createFormField({
				...props.sex,
				value: props.sex.value,
			}),
			email: Form.createFormField({
				...props.email,
				value: props.email.value,
			}),
			phoneNum: Form.createFormField({
				...props.phoneNum,
				value: props.phoneNum.value,
			}),
			age: Form.createFormField({
				...props.age,
				value: props.age.value,
			}),
			educationMax: Form.createFormField({
				...props.educationMax,
				value: props.educationMax.value,
			}),
			introduce: Form.createFormField({
				...props.introduce,
				value: props.introduce.value,
			}),
			avatar: Form.createFormField({
				...props.avatar,
				value: props.avatar.value,
			}),
		};
	},
})(ResumeTemplate);

export default WrappedResumeTemplate