import {constants} from './index'
import { fromJS } from 'immutable';

const storeDefault = fromJS({
    focused : false,
    list : [],
    mouseIn : false,
    page : 1,
    totalPage : 1
});

export default ( state = storeDefault , action ) => {
    switch (action.type) {
        case constants.FOCUS_CHANGE :
            return state.set('focused', action.value);
        case constants.LIST_CHANGE :
            return state.merge({
                list : action.data,
                totalPage : action.totalPage
            });
        case constants.CHANGE_PAGE :
            return state.set('page',action.page);
        case constants.MOUSEIN_CHANGE :
            return state.set('mouseIn',action.value);
        default :
            return state;
    }
}