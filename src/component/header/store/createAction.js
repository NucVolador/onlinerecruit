import {constants} from './index';
import Axios from 'axios';
import { fromJS } from 'immutable';

const listInit = data => ({
    type : constants.LIST_CHANGE,
    data : fromJS(data),
    totalPage : Math.ceil(data.length / 10)
})

export const focusChange = value => ({
    type : constants.FOCUS_CHANGE,
    value
})

export const changePage = page => ({
    type : constants.CHANGE_PAGE,
    page
})

export const changeMouseIn = value => ({
    type : constants.MOUSEIN_CHANGE,
    value
})

export const changeKeyword = value => ({
	type : constants.KEYWORD_CHANGE,
	value
})



export const getList = () => {
    return (dispatch) => {
        Axios.get('/api/header_list.json')
            .then((res) => {
                const data = res.data;
                dispatch(listInit(data.data));
            })
            .catch((err) => {
                console.log('error')
            })
    }
}