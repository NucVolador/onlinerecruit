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
const initialState = fromJS({
	menuName:'首页'
})

export default (state = initialState,action)=>{
	switch (action.type) {
		case type.SWITCH_MENU:
			console.log(state,"state");
			return state.merge({
				menuName:action.menuName
			})
		default:
			return state
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

// import { fromJS } from 'immutable';
// import * as Constants from './constants'
//
// const storeDefault = fromJS({
// 	menuName:'首页'
// });
//
// // const getHomeData = (state,action) => ({
// //     topic : action.topic,
// //     info : action.info,
// //     ad : action.ad,
// //     author : action.author
// // });
//
// export default  (state = storeDefault,action) => {
// 	switch (action.type){
// 		case Constants.CHANGE_SHOW:
// 			// return state.merge(getHomeData(state,action));
// 			return state;
// 		default:
// 			return state;
// 	}
// }