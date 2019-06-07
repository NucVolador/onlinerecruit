import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    resumeId: "",
	personFields: {
		username: {
		    value: ""
        },
		sex	: {
			value: ""
		},
		email: {
			value: ""
		},
		phoneNum: {
			value: ""
		},
		age: {
			value: ""
		},
        educationMax: {
			value: ""
		},
		introduce: {
			value: ""
		},
		avatar: {
			value: ""
		}
    },
	eduFields:{
		college: {
			value: ""
		},
		eduTime: {
			value: ""
		},
		educationInfo: {
			value: ""
		},
		major: {
			value: ""
		}
	},
	workFields: {
		company: {
			value: ""
		},
		workTime: {
			value: ""
		},
		jobName: {
			value: ""
		},
		workDescription: {
			value: ""
		}
	},
	projectFields: {
		project: {
			value: ""
		},
		projectTime: {
			value: ""
		},
		roleName: {
			value: ""
		},
		projectDescription: {
			value: ""
		}
	}
});

// const getHomeData = (state,action) => ({
//     topic : action.topic,
//     info : action.info,
//     ad : action.ad,
//     author : action.author
// });

export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.CHANGE_SHOW:
            // return state.merge(getHomeData(state,action));
            return state;
		case Constants.CHANGE_PERSON:
			return state.merge({
				personFields:action.data
			});
		case Constants.CHANGE_EDU:
			return state.merge({
				eduFields:action.data
			});
		case Constants.CHANGE_WORK:
			return state.merge({
				workFields:action.data
			});
		case Constants.CHANGE_PROJECT:
			return state.merge({
				projectFields:action.data
			});
        default:
            return state;
    }
}