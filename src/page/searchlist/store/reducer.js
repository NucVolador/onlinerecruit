import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    city: "",
    job:"",
    workLife:"",
	info : [],
	page : 1,
	totalPage: 1
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
		case Constants.CHANGE_CITY:
		    return state.merge({city:action.value});
		case Constants.CHANGE_JOB:
			return state.merge({job:action.value});
		case Constants.CHANGE_WORKLIFE:
			return state.merge({workLife:action.value});
		case Constants.NEXT_PAGE_CHANGE:
			return state.set('info',state.get('info').concat(action.data));
		case Constants.NEXT_PAGE_CHANGE2:
			return state.set('info',action.data);
		case Constants.GET_HOME_DATA:
			return state.merge({
				totalPage: Math.ceil(action.totalPage/10),
				info:action.info
			});
		case Constants.NEXT_DATA:
			// state.set('info',state.get('info').concat(action.info))
			// return state.set('info',state.get('info').concat(action.info))
			return state.merge({
				// totalPage: action.totalPage,
				info:state.get('info').concat(action.info),
				page:action.page
			});
		default:
            return state;
    }
}