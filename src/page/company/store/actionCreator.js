import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';
import Axios from "axios/index";

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})
export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};

const changeCompany = data => ({
	type: Constants.CHANGE_COMPANY,
	data
})

export const getCompanyData = (userId)=>{
	
	return (dispatch) =>{
		Axios.get('/admin/companyInfo',{
			params:{
				userId
			}
		})
			.then(res => {
				const {data} = res.data;
				if(data){
					dispatch(changeCompany(fromJS(data.companyFields)))
				}
			})
	}
}

//个人信息

const companyDataChange = data=>({
	type: Constants.CHANGE_COMPANY,
	data
});

export const modifyCompanyData = (data)=>{
	return (dispatch) =>{
		dispatch(companyDataChange(fromJS(data)))
	}
}

export const sendCompanyData = (userId,fields)=>{
	return (dispatch)=>{
		return Axios.post("/admin/companyInfo",{
			userId,
			...fields
		})
			.then(res =>{
				// console.log(res.data);
				const {msg} = res.data;
				console.log(msg);
				return msg
				// return data.msg;
			})
		console.log(fields,"发送");
		// dispatch({type:"1",value:""})
	}
}