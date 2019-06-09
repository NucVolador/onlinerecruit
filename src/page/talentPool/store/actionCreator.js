import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})
export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};