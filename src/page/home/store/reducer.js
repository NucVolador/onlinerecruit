import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    topic : [],
    info : [],
    ad : [],
    author : [],
    page : 1,
    isShow : false
});

const getHomeData = (state,action) => ({
    topic : action.topic,
    info : action.info,
    ad : action.ad,
    author : action.author
});

export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.GET_HOME_DATA:
            return state.merge(getHomeData(state,action));
        case Constants.NEXT_PAGE_CHANGE:
            return state.set('info',state.get('info').concat(action.data));
        case Constants.CHANGE_SHOW:
            return state.set('isShow',action.data);
        default :
            return state;
    }
}