import { fromJS } from 'immutable';
import * as Constants from './constants'

// const storeDefault = fromJS({
//
// });

// const getHomeData = (state,action) => ({
//     topic : action.topic,
//     info : action.info,
//     ad : action.ad,
//     author : action.author
// });

import { type } from './actionCreator'
const initialState = {
	menuName:'首页'
}

export default (state = initialState,action)=>{
	switch (action.type) {
		case type.SWITCH_MENU:
			return {
				...state,
				menuName:action.menuName
			}
		default:
			return {
				...state
			};
	}
}

// export default  (state = storeDefault,action) => {
//     switch (action.type){
//         case Constants.CHANGE_SHOW:
//             // return state.merge(getHomeData(state,action));
//             return state;
//         default:
//             return state;
//     }
// }