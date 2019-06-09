import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
import { Card, Button, Modal,Form, Input, Radio, DatePicker, Select,Icon,InputNumber} from 'antd'
import axios from './../../common/otherAxios'
import Utils from './../../utils/utils'
import BaseForm from './../../component/BaseForm'
import ETable from './../../component/ETable'
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;
const Option = Select.Option;
class User extends PureComponent{
	
	params = {
		page:1,
		userId:this.props.userId
	}
	
	state = {
		isVisible:false
	}
	
	componentDidMount(){
		this.requestList();
	}
	
	requestList = ()=>{
		axios.requestList(this,'/admin/job',this.params,true);
		// axios.requestList(this,'/shenqing/list.php',this.params,true);
	}
	
	// 功能区操作
	hanleOperate = (type)=>{
		let item =  this.state.selectedItem;
		if(type === 'add'){
			if(item){
				this.setState({
					type,
					isVisible:true,
					title:'增加职位',
					userInfo : ''
				})
			}else{
				this.setState({
					type,
					isVisible:true,
					title:'增加职位'
				})
			}
		}else if(type === 'edit'){
			if (!item){
				Modal.info({
					title: "提示",
					content: '请选择一行'
				})
				return;
			}
			this.setState({
				type,
				isVisible: true,
				title: '修改成绩',
				userInfo:item
			})
		}else{
			if (!item) {
				Modal.info({
					title: "提示",
					content: '请选择一行'
				});
				return;
			}
			let _this = this;
			console.log(item)
			Modal.confirm({
				title:'确认删除',
				content:'是否要删除当前选中行的信息',
				onOk(){
					axios.ajax({
						url:'/admin/deleteJob',
						data:{
							params:{
								jobId:item._id
							}
						},
						isMock : true
					}).then((res)=>{
						if(res.code === 1){
							_this.setState({
								isVisible:false
							})
							_this.requestList();
						}
					})
				}
			})
		}
	}
	
	// 创建员工提交
	handleSubmit = ()=>{
		this.userForm.props.form.validateFields((err, values) => {
			if (!err) {
				let type = this.state.type;
				let data = this.userForm.props.form.getFieldsValue();
				
				axios.ajax({
					url:type ==='add'?'/admin/job':'/admin/job',
					data:{
						params: data
					},
					isMock: true,
					type:"post"
				}).then((res)=>{
					
					if(res.code === 1){
						this.userForm.props.form.resetFields();
						this.setState({
							isVisible:false
						})
						console.log("requestList!")
						this.requestList();
					}
				})
			}else{
				return;
			}
		});
		
		//}
	}
	
	handleSearch = (selectedKeys, confirm) => () => {
		confirm();
		this.setState({ searchText: selectedKeys[0] });
	}
	
	handleReset = clearFilters => () => {
		clearFilters();
		this.setState({ searchText: '' });
	}
	render(){
		const {is_admin_login} = this.props;
		if(!is_admin_login){
			return (<Redirect to='/login'/>)
		}
		const columns = [
			{
				title: '职位名称',
				dataIndex: 'jobName',
				key: 'jobName',
				align:'center',
				filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
					<div className="custom-filter-dropdown">
						<Input
							ref={ele => this.searchInput = ele}
							placeholder="请输入职位"
							value={selectedKeys[0]}
							onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
							onPressEnter={this.handleSearch(selectedKeys, confirm)}
						/>
						<Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>搜索</Button>
						<Button onClick={this.handleReset(clearFilters)}>重置</Button>
					</div>
				),
				filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
				onFilter: (value, record) => record.jobName.toLowerCase().includes(value.toLowerCase()),
				onFilterDropdownVisibleChange: (visible) => {
					if (visible) {
						setTimeout(() => {
							this.searchInput.focus();
						});
					}
				},
				render: (text) => {
					const { searchText } = this.state;
					return searchText ? (
						<span>
                        {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
							fragment.toLowerCase() === searchText.toLowerCase()
								? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
						))}
                    </span>
					) : text;
				}
			},
			{
				title: '职位描述',
				dataIndex: 'jobDescription',
				key:'jobDescription',
				render: (text) => {
					const { searchText } = this.state;
					return searchText ? (
						<span>
                        {String(text).split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
							fragment.toLowerCase() === searchText.toLowerCase()
								? <span key={i} className="highlight">{fragment}</span> : fragment
						))}
                    </span>
					) : text;
				}
			},
			// {
			// 	title: '职位id',
			// 	colSpan:0,
			// 	dataIndex: '_id',
			// 	key:'jobId',
			// 	render: (text) => {
			// 		const { searchText } = this.state;
			// 		return "";
			// 	}
			// }
		]
		let footer = {};
		if(this.state.type == 'detail'){
			footer = {
				footer: null
			}
		}
		return (
			<div>
				<Card style={{ marginTop: 10 }} className="operate-wrap">
					<Button type="primary" icon="edit" onClick={() => this.hanleOperate('edit')}>修改职位</Button>
					<Button type="primary" icon="delete" onClick={() => this.hanleOperate('delete')}>删除职位</Button>
					<Button type="primary" icon="plus" onClick={()=>this.hanleOperate('add')}>增加职位</Button>
				</Card>
				<div className="content-wrap">
					<ETable
						updateSelectedItem={Utils.updateSelectedItem.bind(this)}
						columns={columns}
						dataSource={this.state.list}
						selectedRowKeys={this.state.selectedRowKeys}
						selectedItem={this.state.selectedItem}
						pagination={this.state.pagination}
					/>
				</div>
				<Modal
					title={this.state.title}
					visible={this.state.isVisible}
					onOk={this.handleSubmit}
					onCancel={()=>{
						this.userForm.props.form.resetFields();
						this.setState({
							isVisible:false
						})
					}}
					width={600}
					{ ...footer }
				>
					<UserForm userId={this.props.userId} type={this.state.type} userInfo={this.state.userInfo} wrappedComponentRef={(inst)=>{this.userForm = inst;}}/>
				</Modal>
			</div>
		);
	}
}
class UserForm extends PureComponent{
	
	getState = (state)=>{
		return {
			'1':'计算机组成原理',
			'2':'计算机网络',
			'3':'高等数学',
			'4':'大学英语',
			'5':'web前端开发',
			'6':'数据挖掘',
			'7':'MongoDB',
			'8':'Redis',
			'9':'SpringBoot',
			'10':'Angular'
		}[state]
	};
	
	render(){
		let type = this.props.type;
		let userInfo = this.props.userInfo || {};
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol:{span:5},
			wrapperCol:{span:19}
		}
		if(type === 'add'){
			return (
				<Form layout="horizontal">
					<FormItem {...formItemLayout}>
						{
							getFieldDecorator('userId',{
								initialValue: this.props.userId,
							})(
								<Input type="hidden"/>
							)
						}
					</FormItem>
					<FormItem {...formItemLayout}>
						{
							getFieldDecorator('jobId',{
								initialValue: "",
							})(
								<Input type="hidden"/>
							)
						}
					</FormItem>
					<FormItem label="职位名称" {...formItemLayout}>
						{
							getFieldDecorator('jobName',{
								initialValue: "",
								rules: [{ required: true, message: '职位不能为空！' }],
							})(
								<Input/>
							)
						}
					</FormItem>
					<FormItem label="职位描述" {...formItemLayout}>
						{
							getFieldDecorator('jobDescription',{
								rules: [],
							})(
								<TextArea autosize={{ minRows: 10, maxRows: 15 }} />
							)
						}
					</FormItem>
				</Form>
			)
		}else{
			return (
				<Form layout="horizontal">
					<FormItem {...formItemLayout}>
						{
							getFieldDecorator('userId',{
								initialValue: this.props.userId,
							})(
								<Input type="hidden"/>
							)
						}
					</FormItem>
					<FormItem {...formItemLayout}>
						{
							getFieldDecorator('jobId',{
								initialValue: userInfo._id,
							})(
								<Input type="hidden"/>
							)
						}
					</FormItem>
					<FormItem label="职位名称" {...formItemLayout}>
						{
							getFieldDecorator('jobName',{
								initialValue: userInfo.jobName,
								rules: [{ required: true, message: '职位不能为空！' }],
							})(
								<Input placeholder="请输入职位名称"/>
							)
						}
					</FormItem>
					<FormItem label="职位描述" {...formItemLayout}>
						{
							getFieldDecorator('jobDescription',{
								initialValue: userInfo.jobDescription
							})(
								<TextArea autosize={{ minRows: 10, maxRows: 15 }} />
							)
						}
					</FormItem>
				</Form>
			);
		}
		
	}
}
UserForm = Form.create({})(UserForm);

const mapState = (state) => ({
	is_admin_login: state.getIn(['Login','is_admin_login']),
	userId: state.getIn(['Login','userId'])
	
})

const mapDispatch = (dispatch) => ({
	// login(username, password){
	// 	dispatch(ActionCreator.login(username, password))
	// }
})

export default connect(mapState, mapDispatch)(User);