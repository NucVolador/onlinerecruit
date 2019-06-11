import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';
import Axios from "../../../common/otherAxios";

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})
export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};

const changeData = data => ({
	type : Constants.CHANGE_SHOW,
	data: data.get("item_list")
})

export const getState = userId => {
    return (dispatch) => {
		axios.get('/queryState?userId='+userId)
            .then(res=>{
                const data = res.data.result;
                console.log(data);
                dispatch(changeData(fromJS(data)))
            })
        
    }
}