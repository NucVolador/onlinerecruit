import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox , Row, Col, Select,DatePicker} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;
const { TextArea } = Input;

class EduTemplate extends Component{
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// this.props.login(values.username,values.password)
				values.eduTime = [
					values.eduTime[0].format("YYYY-MM-DD"),
					values.eduTime[1].format("YYYY-MM-DD")
				]
				console.log(Object.keys(values),values.eduTime)
				this.props.submitHandle();
			}
		});
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
		const rangeConfig = {
			rules: [{ type: 'array', required: true, message: '范围不能为空!' }],
		};
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row gutter={16}>
					<Col span={16} style={{paddingTop:'8px'}}>
                        <Row>
							<Col span={24}>
								<Form.Item
									label="学校名称"
									{...formItemLayout}
								>
									{getFieldDecorator('college', {
										rules: [{ required: true, message: '学校不能为空' }],
									})(
										<Input />
									)}
								</Form.Item>
								<Form.Item
									label="时间"
									{...formItemLayout}
								>
									{getFieldDecorator('eduTime', rangeConfig)(<RangePicker />)}
								</Form.Item>
								<Form.Item
									label="学历"
									{...formItemLayout}
								>
									{getFieldDecorator('educationInfo', {
										rules: [{ required: true, message: '学历不能为空' }],
									})(
										<Select placeholder="请选择">
											<Option value="0">专科</Option>
											<Option value="1">本科</Option>
											<Option value="2">硕士</Option>
											<Option value="3">博士</Option>
										</Select>,
									)}
								</Form.Item>
								<Form.Item
									label="专业名称"
									{...formItemLayout}
								>
									{getFieldDecorator('major', {
										rules: [],
									})(
										<Input />
									)}
								</Form.Item>
                            </Col>
                        </Row>
                    </Col>
					<Col span={8}>
						<Form.Item
							wrapperCol={{
								xs: { span: 24 },
								sm: { span: 16,offset:6 },
							}}
						>
							<Button type="primary" htmlType="submit">
								保存
							</Button>
						</Form.Item>
					</Col>
                </Row>
            </Form>
            );
    }
}

const WrappedEduTemplate = Form.create({
	name: 'edu',
	onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields(props) {
		return {
			college: Form.createFormField({
				...props.college,
				value: props.college.value,
			}),
			eduTime: Form.createFormField({
				...props.eduTime,
				value: props.eduTime.value,
			}),
			educationInfo: Form.createFormField({
				...props.educationInfo,
				value: props.educationInfo.value,
			}),
			major: Form.createFormField({
				...props.major,
				value: props.major.value,
			})
		};
	},
})(EduTemplate);

export default WrappedEduTemplate