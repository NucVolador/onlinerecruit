import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({

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
        default:
            return state;
    }
}