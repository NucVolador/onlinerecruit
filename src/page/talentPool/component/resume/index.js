import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment'
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
		let {personFields , eduFields ,workFields ,projectFields} = this.props.data;
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
		
		return (
			<ResumeWrapper>
				<AddInfoContentWrapper>
					<AddInfoTitle>个人信息</AddInfoTitle>
					<PersonInfo
						{...personFields}
						imageSrc={personFields.avatar.value}
					/>
				</AddInfoContentWrapper>
				<AddInfoContentWrapper>
					<AddInfoTitle>教育背景</AddInfoTitle>
					<EduInfo
						{...eduFields}
					/>
				</AddInfoContentWrapper>
				<AddInfoContentWrapper>
					<AddInfoTitle>工作经验</AddInfoTitle>
					<WorkInfo
						{...workFields}
					/>
				</AddInfoContentWrapper>
				<AddInfoContentWrapper>
					<AddInfoTitle>项目经验</AddInfoTitle>
					<ProjectInfo
						{...projectFields}
					/>
				</AddInfoContentWrapper>
			</ResumeWrapper>
		);
	}
	
}


export default Resume;