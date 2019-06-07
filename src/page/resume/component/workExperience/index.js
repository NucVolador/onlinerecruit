import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox , Row, Col, Select,DatePicker} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;
const { TextArea } = Input;

class WorkTemplate extends Component{
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// this.props.login(values.username,values.password)
				// values.eduTime = [
				// 	values.eduTime[0].format("YYYY-MM-DD"),
				// 	values.eduTime[1].format("YYYY-MM-DD")
				// ]
				// console.log(Object.keys(values),values.eduTime)
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
									label="单位名称"
									{...formItemLayout}
								>
									{getFieldDecorator('company', {
										rules: [{ required: true, message: '单位不能为空' }],
									})(
										<Input />
									)}
								</Form.Item>
								<Form.Item
									label="工作时间"
									{...formItemLayout}
								>
									{getFieldDecorator('workTime', rangeConfig)(<RangePicker />)}
								</Form.Item>
								<Form.Item
									label="职位名称"
									{...formItemLayout}
								>
									{getFieldDecorator('jobName', {
										rules: [{required: true, message: '职位不能为空'}],
									})(
										<Input />
									)}
								</Form.Item>
								<Form.Item
									label="工作职责"
									{...formItemLayout}
								>
									{getFieldDecorator('workDescription', {
										rules: [{ max: 500, message: '字数最多为500字' }],
									})(
										<TextArea autosize={{ minRows: 10, maxRows: 15 }} />
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
	name: 'work' ,
	onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields(props) {
		return {
			company: Form.createFormField({
				...props.company,
				value: props.company.value,
			}),
			workTime: Form.createFormField({
				...props.workTime,
				value: props.workTime.value,
			}),
			jobName: Form.createFormField({
				...props.jobName,
				value: props.jobName.value,
			}),
			workDescription: Form.createFormField({
				...props.workDescription,
				value: props.workDescription.value,
			})
		};
	},
})(WorkTemplate);

export default WrappedEduTemplate