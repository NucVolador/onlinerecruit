import React,{PureComponent} from 'react';
import { Form, Icon, Input, Button, Checkbox , Row, Col, Select,DatePicker} from 'antd';
import Avatar from './component/avatar'

const { Option } = Select;
const { TextArea } = Input;

class ResumeTemplate extends PureComponent{
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
									label="公司名称"
								>
									{getFieldDecorator('companyName', {
										rules: [{ required: true, message: '公司名称不能为空！' }],
									})(
										<Input
											prefix={<Icon type="user" style={{ color: 'rgb(150,150,150)' }} />}
										/>
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
									{...formItemLayout}
									label="地址"
								>
									{getFieldDecorator('address', {
										rules: [
											{ required: true, message: '地址不能为空！' }
										],
									})(<Input
										prefix={<Icon type="mail" style={{ color: 'rgb(150,150,150)' }} />}
									/>)}
								</Form.Item>
								<Form.Item
									label="公司介绍"
									{...formItemLayout}
								>
									{getFieldDecorator('introduce', {
										rules: [{ max: 100, message: '字数最多为100字' }],
									})(
										<TextArea rows={4} />
									)}
								</Form.Item>
								<Form.Item
									label="公司特色"
									{...formItemLayout}
								>
									{getFieldDecorator('special', {
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
	name: 'company',
	onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields(props) {
		return {
			companyName: Form.createFormField({
				...props.companyName,
				value: props.companyName.value,
			}),
			email: Form.createFormField({
				...props.email,
				value: props.email.value,
			}),
			phoneNum: Form.createFormField({
				...props.phoneNum,
				value: props.phoneNum.value,
			}),
			address: Form.createFormField({
				...props.address,
				value: props.address.value,
			}),
			introduce: Form.createFormField({
				...props.introduce,
				value: props.introduce.value,
			}),
			special: Form.createFormField({
				...props.special,
				value: props.special.value,
			}),
			avatar: Form.createFormField({
				...props.avatar,
				value: props.avatar.value,
			})
		};
	},
})(ResumeTemplate);

export default WrappedResumeTemplate