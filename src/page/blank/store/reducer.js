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
        // case Constants.GET_HOME_DATA:
        //     return state.merge(getHomeData(state,action));
    }
}