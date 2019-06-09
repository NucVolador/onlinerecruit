import React,{ PureComponent, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
import {
	AddInfoContentWrapper,
	AddInfoTitle
} from './style';

import ComponyForm from './component';
import {message} from "antd/lib/index";


class Company extends PureComponent{
	companySubmitHandle = ()=>{
		const {userId,companyFields} = this.props
		this.props.sendCompanyData(userId,companyFields.toJS())
			.then((msg)=>{
				message.info(msg)
			})
	}
	handleCompanyChange = changedFields => {
		let {companyFields} = this.props;
		
		companyFields = companyFields.toJS();
		// changedFields.eduTime
		// console.log(changedFields,fields,"aaqeweq")
		// console.log({ ...fields, ...changedFields })
		this.props.modifyCompanyData({ ...companyFields, ...changedFields })
	};
	
    render(){
		console.log("将要render")
		let {is_admin_login,companyFields,userId} = this.props;
		companyFields = companyFields.toJS();
		if(!is_admin_login){
			return (<Redirect to='/login'/>)
		}
		return (
		    <Fragment>
				<AddInfoContentWrapper>
					<AddInfoTitle>公司信息</AddInfoTitle>
					<ComponyForm
						userId={userId}
						{...companyFields}
						submitHandle={this.companySubmitHandle}
						onChange={this.handleCompanyChange}
						imageSrc={companyFields.avatar.value}
					/>
				</AddInfoContentWrapper>
			</Fragment>
        )
	}
	componentDidMount(){
		const {userId} = this.props;
		console.log("将要发送请求")
		this.props.getCompanyData(userId)
	}
}

const mapState = (state) => ({
	is_admin_login: state.getIn(['Login','is_admin_login']),
	userId: state.getIn(['Login','userId']),
	companyFields: state.getIn(['Company','companyFields']),
})

const mapDispatch = (dispatch) => ({
	// 初始化加载公司数据
	getCompanyData(userId){
		return dispatch(ActionCreator.getCompanyData(userId))
	},
	// 个人信息部分
	modifyCompanyData(fields){
		dispatch(ActionCreator.modifyCompanyData(fields))
	},
	sendCompanyData(userId,fields){
		return dispatch(ActionCreator.sendCompanyData(userId,fields));
	}
})

export default connect(mapState, mapDispatch)(Company);