import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    topic : [],
    info : [],
    ad : [],
    author : [],
    page : 1,
    isShow : false,
    totalPage: ""
});

const getHomeData = (state,action) => ({
    info : action.info,
});

export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.GET_HOME_DATA:
            return state.merge({
				totalPage: Math.ceil(action.totalPage/10),
                info:action.info
            });
        case Constants.NEXT_PAGE_CHANGE:
            return state.set('info',state.get('info').concat(action.data));
        case Constants.CHANGE_SHOW:
            return state.set('isShow',action.data);
		case Constants.NEXT_DATA:
			// state.set('info',state.get('info').concat(action.info))
			// return state.set('info',state.get('info').concat(action.info))
			return state.merge({
				// totalPage: action.totalPage,
				info:state.get('info').concat(action.info),
				page:action.page
			});
        default :
            return state;
    }
}