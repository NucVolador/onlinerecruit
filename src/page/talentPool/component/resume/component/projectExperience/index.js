import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox , Row, Col, Select,DatePicker} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;
const { TextArea } = Input;

class ProjectTemplate extends Component{
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
									label="项目名称"
									{...formItemLayout}
								>
									{getFieldDecorator('project', {
										rules: [{ required: true, message: '项目名不能为空' }],
									})(
										<Input />
									)}
								</Form.Item>
								<Form.Item
									label="项目时间"
									{...formItemLayout}
								>
									{getFieldDecorator('projectTime', rangeConfig)(<RangePicker />)}
								</Form.Item>
								<Form.Item
									label="职位名称"
									{...formItemLayout}
								>
									{getFieldDecorator('roleName', {
										rules: [{required: true, message: '职位不能为空'}],
									})(
										<Input />
									)}
								</Form.Item>
								<Form.Item
									label="项目职责"
									{...formItemLayout}
								>
									{getFieldDecorator('projectDescription', {
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
						</Form.Item>
					</Col>
				</Row>
			</Form>
		);
	}
}

const WrappedEduTemplate = Form.create({
	name: 'project' ,
	onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields(props) {
		return {
			project: Form.createFormField({
				...props.project,
				value: props.project.value,
			}),
			projectTime: Form.createFormField({
				...props.projectTime,
				value: props.projectTime.value,
			}),
			roleName: Form.createFormField({
				...props.roleName,
				value: props.roleName.value,
			}),
			projectDescription: Form.createFormField({
				...props.projectDescription,
				value: props.projectDescription.value,
			})
		};
	},
})(ProjectTemplate);

export default WrappedEduTemplate