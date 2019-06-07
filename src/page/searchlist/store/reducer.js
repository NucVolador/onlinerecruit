import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    city: "",
    job:"",
    workLife:"",
	info : [],
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
		default:
            return state;
    }
}