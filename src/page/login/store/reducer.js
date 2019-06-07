import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
	//test
	is_login: true,
	userId: "5cf7d485b2143737b4165e7c",
	
	// is_login: false,
    // userId: "",
	msg: ""
});

const getLoginData = (state,action) => ({
	is_login : action.is_login,
	userId : action.userId,
});

const logout = (state,action) => ({
	is_login : false,
	userId : "",
});

export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.LOGIN:
            return state.merge(getLoginData(state,action));
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