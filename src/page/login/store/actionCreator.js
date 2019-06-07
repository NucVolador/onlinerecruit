import Axios from '../../../common/http';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const changeLogin= userId => ({
    type : Constants.LOGIN,
    is_login: true,
    userId: userId
})

const changeMsg = msg =>({
	type : Constants.MSG,
	msg
})

export const login  = (username,password) => {
    return (dispatch) =>{
        console.log("发送登录请求",username,password)
		// axios *** 进行发送信息，成功进行changeLogin，失败返回错误信息。
        return Axios.post("/login",{
            username,
            password
        })
            .then((res)=>{
                console.log(res)
                const {data} = res
                if(data.code !== -1){
					dispatch(changeLogin(data.data._id));
					// dispatch(changeMsg(data.msg));
				}
				return data.msg
            })
        //
    }
};

export const register  = (username,password,type) => {
	return (dispatch) =>{
		console.log("发送注册请求",username,password,type)
		// axios *** 进行发送信息，成功进行changeLogin，失败返回错误信息。
		return Axios.post("/register",{
			username,
			password,
            type
		})
			.then((res)=>{
				console.log(res)
				const {data} = res
				if(data.code !== -1){
					dispatch(changeLogin(data.data._id));
				}
				return data.msg
			})
		//
	}
};

export const logout = ()=>{
    return (dispatch) => {
        dispatch({
            type:Constants.LOGOUT
        })
    }
}