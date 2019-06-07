import { fromJS } from 'immutable';
import * as Constants from './constants'

const storeDefault = fromJS({
    title: "",
    content : ""
});
export default  (state = storeDefault,action) => {
    switch (action.type){
        case Constants.CHANGE_DETAIL:
            return state.merge({
               title:action.title,
               content : action.content
            });
        default :
            return state;
    }
}