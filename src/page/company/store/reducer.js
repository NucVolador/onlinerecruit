import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
	companyFields: {
		companyName: {
			value: ""
		},
		email: {
			value: ""
		},
		phoneNum: {
			value: ""
		},
		address: {
			value: ""
		},
		introduce: {
			value: ""
		},
		special: {
			value: ""
		},
		avatar: {
			value: ""
		}
	},
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
		case Constants.CHANGE_COMPANY:
			return state.merge({
				companyFields:action.data
			});
        default:
            return state;
    }
}