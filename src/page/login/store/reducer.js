import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
	//test
	is_login: false,
	// 企业
	// userId: "5cfbaafa3732a414182eb206",
	//求职者
	// userId: "5cfbabba3732a414182eb207",
	userId:"",
	is_admin_login: false,
	// is_login: false,
    // userId: "",
	msg: ""
});

const getAdminLoginData = (state,action) => ({
	is_admin_login : action.is_admin_login,
	userId : action.userId,
});

const getLoginData = (state,action) => ({
	is_login : action.is_login,
	userId : action.userId,
});

const logout = (state,action) => ({
	is_login : false,
	is_admin_login: false,
	userId : "",
});

export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.LOGIN:
            return state.merge(getLoginData(state,action));
		case Constants.Admin_LOGIN:
			return state.merge(getAdminLoginData(state,action));
		case Constants.MSG:
			return state.merge({
				msg: action.msg
			});
		case Constants.LOGOUT:
			return state.merge(logout());
        default:
            return state;
    }
}