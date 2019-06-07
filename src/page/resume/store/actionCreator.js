import Axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})
export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};

const changePerson = data => ({
	type: Constants.CHANGE_PERSON,
	data
})

const changeEdu = data => ({
	type: Constants.CHANGE_EDU,
	data
})

const changeWork = data => ({
	type: Constants.CHANGE_WORK,
	data
})

const changeProject = data => ({
	type: Constants.CHANGE_PROJECT,
	data
})

export const getResumeData = (userId)=>{
	
	return (dispatch) =>{
		Axios.get('/resume',{
		    params:{
		    	userId
			}
		})
		    .then(res => {
		    	const {data} = res.data;
		    	if(data){
					dispatch(changePerson(fromJS(data.personFields)))
					dispatch(changeEdu(fromJS(data.eduFields)))
					dispatch(changeWork(fromJS(data.workFields)))
					dispatch(changeProject(fromJS(data.projectFields)))
				}
			})
	}
}


//个人信息

const personDataChange = data=>({
	type: Constants.CHANGE_PERSON,
    data
});

export const modifyPersonData = (data)=>{
	return (dispatch) =>{
		if(typeof data.age.value.format === 'function'){
			data.age.value = data.age.value.format("YYYY-MM-DD");
		}
		dispatch(personDataChange(fromJS(data)))
	}
}

export const sendPersonData = (userId,fields)=>{
	return (dispatch)=>{
		return Axios.post("/personInfo",{
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


//教育经历
const eduDataChange = data=>({
	type: Constants.CHANGE_EDU,
	data
});

export const modifyEduData = (data)=>{
	return (dispatch) =>{
		if(data.eduTime.value.length>0 && typeof data.eduTime.value[0].format === 'function'){
			data.eduTime.value[0] = data.eduTime.value[0].format("YYYY-MM-DD")
			data.eduTime.value[1] = data.eduTime.value[1].format("YYYY-MM-DD")
		}
		dispatch(eduDataChange(fromJS(data)))
	}
}

export const sendEduData = (userId,fields)=>{
	return (dispatch)=>{
		return Axios.post("/eduInfo",{
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


//工作经历
const workDataChange = data=>({
	type: Constants.CHANGE_WORK,
	data
});

export const modifyWorkData = (data)=>{
	return (dispatch) =>{
		if(data.workTime.value.length>0 && typeof data.workTime.value[0].format === 'function'){
			data.workTime.value[0] = data.workTime.value[0].format("YYYY-MM-DD")
			data.workTime.value[1] = data.workTime.value[1].format("YYYY-MM-DD")
		}
		dispatch(workDataChange(fromJS(data)))
	}
}

export const sendWorkData = (userId,fields)=>{
	return (dispatch)=>{
		return Axios.post("/companyInfo",{
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


//项目经历
const projectDataChange = data=>({
	type: Constants.CHANGE_PROJECT,
	data
});

export const modifyProjectData = (data)=>{
	return (dispatch) =>{
		console.log(data);
		if(data.projectTime.value.length>0 && typeof data.projectTime.value[0].format === 'function'){
			data.projectTime.value[0] = data.projectTime.value[0].format("YYYY-MM-DD")
			data.projectTime.value[1] = data.projectTime.value[1].format("YYYY-MM-DD")
		}
		dispatch(projectDataChange(fromJS(data)))
	}
}

export const sendProjectData = (userId,fields)=>{
	return (dispatch)=>{
		return Axios.post("/projectInfo",{
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