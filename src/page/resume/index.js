import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment'
import {
	ActionCreator,
} from './store';
import {
	ResumeWrapper,
	AddInfoContentWrapper,
	AddInfoTitle
} from './style';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import PersonInfo from './component/personInfo';
import EduInfo from './component/eduInfo';
import WorkInfo from './component/workExperience';
import ProjectInfo from './component/projectExperience';

class Resume extends PureComponent{
	state = {
		// 可以根据是否以前有保存记录来确定是否直接显示模板
		show_resume_template: true
	};
	handlePersonChange = changedFields => {
		let {personFields} = this.props;
		
		personFields = personFields.toJS();
		// changedFields.eduTime
		// console.log(changedFields,fields,"aaqeweq")
		// console.log({ ...fields, ...changedFields })
		this.props.modifyPersonData({ ...personFields, ...changedFields })
	};
	handleEduChange = changedFields => {
		// changedFields = changedFields.format("YYYY-MM-DD")
		console.log(changedFields,"xxxx");
		// changedFields = {
		//
		// }
		let {eduFields} = this.props;
		eduFields = eduFields.toJS();
		// console.log(changedFields,fields,"aaqeweq")
		// console.log({ ...fields, ...changedFields })
		console.log("edu")
		this.props.modifyEduData({ ...eduFields, ...changedFields })
	};
	handleWorkChange = changedFields => {
		let {workFields} = this.props;
		workFields = workFields.toJS();
		// console.log(changedFields,fields,"aaqeweq")
		// console.log({ ...fields, ...changedFields })
		this.props.modifyWorkData({ ...workFields, ...changedFields })
	};
	handleProjectChange = changedFields => {
		let {projectFields} = this.props;
		projectFields = projectFields.toJS();
		// console.log(changedFields,fields,"aaqeweq")
		// console.log({ ...fields, ...changedFields })
		this.props.modifyProjectData({ ...projectFields, ...changedFields })
	};
	personSubmitHandle = ()=>{
		const {userId,personFields} = this.props
		this.props.sendPersonData(userId,personFields.toJS())
			.then((msg)=>{
				message.info(msg)
			})
	}
	eduSubmitHandle = ()=>{
		const {userId,eduFields} = this.props
		this.props.sendEduData(userId,eduFields.toJS())
			.then((msg)=>{
				message.info(msg)
			})
	}
	workSubmitHandle = ()=>{
		const {userId,workFields} = this.props
		this.props.sendWorkData(userId,workFields.toJS())
			.then((msg)=>{
				message.info(msg)
			})
	}
	projectSubmitHandle = ()=>{
		const {userId,projectFields} = this.props
		this.props.sendProjectData(userId,projectFields.toJS())
			.then((msg)=>{
				message.info(msg)
			})
	}
    render(){
    	const {show_resume_template} = this.state
		const {is_login,resumeId,userId} = this.props;
		let {personFields , eduFields ,workFields ,projectFields} = this.props;
		personFields = personFields.toJS();
		eduFields = eduFields.toJS()
		workFields = workFields.toJS();
		projectFields = projectFields.toJS()
		personFields.age.value = personFields.age.value===""?null:moment(personFields.age.value,"YYYY-MM-DD");
		console.log(personFields.age.value);
		if(eduFields.eduTime.value.length>0){
			eduFields.eduTime.value[0] = moment(eduFields.eduTime.value[0],"YYYY-MM-DD");
			eduFields.eduTime.value[1] = moment(eduFields.eduTime.value[1],"YYYY-MM-DD");
		}else{
			eduFields.eduTime.value = null;
		}
		if(workFields.workTime.value.length>0){
			workFields.workTime.value[0] = moment(workFields.workTime.value[0],"YYYY-MM-DD");
			workFields.workTime.value[1] = moment(workFields.workTime.value[1],"YYYY-MM-DD");
		}else{
			workFields.workTime.value = null
		}
		if(projectFields.projectTime.value.length>0){
			projectFields.projectTime.value[0] = moment(projectFields.projectTime.value[0],"YYYY-MM-DD");
			projectFields.projectTime.value[1] = moment(projectFields.projectTime.value[1],"YYYY-MM-DD");
		}else{
			projectFields.projectTime.value = null;
		}
		
		
		
		// 未登录
		if(!is_login){
			return (<Redirect to='/login'/>)
		}
		//无简历
		if(!resumeId){
			// 是否显示简历模板
			if(show_resume_template){
				return (
					<ResumeWrapper>
						<AddInfoContentWrapper>
							<AddInfoTitle>个人信息</AddInfoTitle>
							<PersonInfo
								userId={userId}
								{...personFields}
								submitHandle={this.personSubmitHandle}
								onChange={this.handlePersonChange}
								imageSrc={personFields.avatar.value}
							/>
						</AddInfoContentWrapper>
						<AddInfoContentWrapper>
							<AddInfoTitle>教育背景</AddInfoTitle>
							<EduInfo
								userId={userId}
								{...eduFields}
								submitHandle={this.eduSubmitHandle}
								onChange={this.handleEduChange}
							/>
						</AddInfoContentWrapper>
						<AddInfoContentWrapper>
							<AddInfoTitle>工作经验</AddInfoTitle>
							<WorkInfo
								userId={userId}
								{...workFields}
								submitHandle={this.workSubmitHandle}
								onChange={this.handleWorkChange}
							/>
						</AddInfoContentWrapper>
						<AddInfoContentWrapper>
							<AddInfoTitle>项目经验</AddInfoTitle>
							<ProjectInfo
								userId={userId}
								{...projectFields}
								submitHandle={this.projectSubmitHandle}
								onChange={this.handleProjectChange}
							/>
						</AddInfoContentWrapper>
					</ResumeWrapper>
				);
			}else{
				return (
					<ResumeWrapper>
						<div className="addResume">
							<a onClick={()=>{this.setState({show_resume_template:true})}}>
								暂无简历，请创建简历！
								<Icon type="plus" style={{ color: 'rgb(255,195,0)',fontWeight: '700',fontSize: '29px' }} />
							</a>
						</div>
					</ResumeWrapper>
				);
			}
		}
		// 已有简历，查看简历
		return (
			<ResumeWrapper>
				<h1>HelloWorld</h1>
			</ResumeWrapper>
        )
	}
	
	componentDidMount(){
    	const {userId} = this.props;
 		this.props.getResumeData(userId)
	}
}

const mapState = (state) => ({
	is_login: state.getIn(['Login','is_login']),
	userId: state.getIn(['Login','userId']),
	resumeId: state.getIn(['Resume','resumeId']),
	personFields: state.getIn(['Resume','personFields']),
	eduFields: state.getIn(['Resume','eduFields']),
	workFields: state.getIn(['Resume','workFields']),
	projectFields: state.getIn(['Resume','projectFields'])
})

const mapDispatch = (dispatch) => ({
	// 初始化加载简历数据
	getResumeData(userId){
		return dispatch(ActionCreator.getResumeData(userId))
	},
	// 个人信息部分
	modifyPersonData(fields){
		dispatch(ActionCreator.modifyPersonData(fields))
	},
	sendPersonData(userId,fields){
		return dispatch(ActionCreator.sendPersonData(userId,fields));
	},
	// 教育信息部分
	modifyEduData(fields){
		dispatch(ActionCreator.modifyEduData(fields))
	},
	sendEduData(userId,fields){
		return dispatch(ActionCreator.sendEduData(userId,fields));
	},
	//工作经历部分
	modifyWorkData(fields){
		dispatch(ActionCreator.modifyWorkData(fields))
	},
	sendWorkData(userId,fields){
		return dispatch(ActionCreator.sendWorkData(userId,fields));
	},
	// 项目经验部分
	modifyProjectData(fields){
		dispatch(ActionCreator.modifyProjectData(fields))
	},
	sendProjectData(userId,fields){
		return dispatch(ActionCreator.sendProjectData(userId,fields));
	}
})

export default connect(mapState, mapDispatch)(Resume);